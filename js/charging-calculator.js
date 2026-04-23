// Empirical Charging Calculator based on real Nissan Leaf 40kWh user data
document.addEventListener('DOMContentLoaded', function() {
  // Update slider values in real-time
  const startCharge = document.getElementById('startCharge');
  const targetCharge = document.getElementById('targetCharge');
  const startValue = document.getElementById('startValue');
  const targetValue = document.getElementById('targetValue');
  const finishByInput = document.getElementById('finishBy');
  const finishByGroup = document.getElementById('finishByGroup');
  const scheduleInputs = document.querySelectorAll('input[name="scheduleMode"]');

  if (startCharge && targetCharge && startValue && targetValue) {
    startCharge.addEventListener('input', function() {
      startValue.textContent = this.value + '%';
      validateChargeRange();
      calculateChargingTime();
    });

    targetCharge.addEventListener('input', function() {
      targetValue.textContent = this.value + '%';
      validateChargeRange();
      calculateChargingTime();
    });

    function validateChargeRange() {
      const start = parseInt(startCharge.value);
      const target = parseInt(targetCharge.value);
      
      if (start >= target) {
        targetCharge.value = Math.min(start + 1, 100);
        targetValue.textContent = targetCharge.value + '%';
      }
    }

    // Charger selection
    document.querySelectorAll('.charger-option').forEach(option => {
      option.addEventListener('click', function() {
        document.querySelectorAll('.charger-option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        calculateChargingTime();
      });
    });

    scheduleInputs.forEach(input => {
      input.addEventListener('change', function() {
        updateScheduleMode();
        calculateChargingTime();
      });
    });

    if (finishByInput) {
      setFinishByMinimum();
      finishByInput.addEventListener('input', calculateChargingTime);
      finishByInput.addEventListener('focus', setFinishByMinimum);
    }

    updateScheduleMode();

    // Initialize with default calculation
    calculateChargingTime();
  }

  function updateScheduleMode() {
    if (!finishByGroup || !finishByInput) {
      return;
    }

    const mode = getScheduleMode();
    const isFinishMode = mode === 'finish';

    finishByGroup.classList.toggle('hidden', !isFinishMode);
    finishByInput.disabled = !isFinishMode;

    if (isFinishMode) {
      setFinishByMinimum();
    }

    document.querySelectorAll('.schedule-option').forEach(option => {
      const optionInput = option.querySelector('input[name="scheduleMode"]');
      option.classList.toggle('selected', optionInput && optionInput.checked);
    });
  }
});

function calculateChargingTime() {
  const startCharge = document.getElementById('startCharge');
  const targetCharge = document.getElementById('targetCharge');
  const selectedCharger = document.querySelector('.charger-option.selected');
  const timeDisplay = document.getElementById('timeDisplay');
  const energyInfo = document.getElementById('energyInfo');
  const chargingDetails = document.getElementById('chargingDetails');
  const result = document.getElementById('result');

  if (!startCharge || !targetCharge || !selectedCharger || !timeDisplay || !energyInfo || !chargingDetails || !result) {
    return;
  }

  const estimate = getChargingEstimate(
    parseInt(startCharge.value, 10),
    parseInt(targetCharge.value, 10),
    selectedCharger.dataset.charger
  );

  const schedule = getScheduleDetails(estimate.chargingTime);

  timeDisplay.textContent = formatDuration(estimate.chargingTime);
  energyInfo.textContent = `Adding ${estimate.energyAdded.toFixed(1)} kWh using ${estimate.chargerName}`;

  chargingDetails.innerHTML = [
    schedule.primaryLine,
    schedule.secondaryLine,
    `<p><strong>Range added:</strong> ~${Math.round(estimate.rangeAdded)} miles</p>`,
    `<p><strong>Average charging power:</strong> ${estimate.avgPower.toFixed(1)} kW</p>`,
    `<p><strong>Energy from wall:</strong> ${estimate.energyFromWall.toFixed(1)} kWh</p>`
  ].filter(Boolean).join('');

  result.classList.remove('hidden');
}

function getChargingEstimate(startSoC, targetSoC, chargerType) {
  const percentageIncrease = targetSoC - startSoC;
  const energyAdded = percentageIncrease * 39 / 100;

  let chargingTime;
  let chargerName;
  let avgPower;
  let energyFromWall;

  if (chargerType === 'slow') {
    chargerName = 'UK 3-Pin Plug';

    let baseRateHoursPerPercent = 12 / 77;
    let adjustedTime = 0;

    for (let i = 0; i < percentageIncrease; i++) {
      const currentSoC = startSoC + i;
      let timeForThisPercent = baseRateHoursPerPercent;

      if (currentSoC < 10) {
        timeForThisPercent *= 1.15;
      } else if (currentSoC >= 90) {
        timeForThisPercent *= 1.4;
      } else if (currentSoC >= 85) {
        timeForThisPercent *= 1.2;
      }

      adjustedTime += timeForThisPercent;
    }

    chargingTime = adjustedTime;
    avgPower = energyAdded / chargingTime;
    energyFromWall = chargingTime * 2.3;
  } else {
    chargerName = 'Type 2 Charger';

    let slowChargerTime = percentageIncrease * 12 / 77;
    let adjustedTime = 0;
    let baseRateHoursPerPercent = slowChargerTime / percentageIncrease;

    for (let i = 0; i < percentageIncrease; i++) {
      const currentSoC = startSoC + i;
      let timeForThisPercent = baseRateHoursPerPercent;

      if (currentSoC < 10) {
        timeForThisPercent *= 1.1;
      } else if (currentSoC >= 90) {
        timeForThisPercent *= 1.3;
      } else if (currentSoC >= 85) {
        timeForThisPercent *= 1.15;
      }

      adjustedTime += timeForThisPercent;
    }

    chargingTime = adjustedTime / 2.87 * 0.95;
    avgPower = energyAdded / chargingTime;
    energyFromWall = chargingTime * 6.6 * 0.90;
  }

  return {
    chargingTime,
    chargerName,
    avgPower,
    energyAdded,
    energyFromWall,
    rangeAdded: percentageIncrease / 100 * 148
  };
}

function getScheduleDetails(chargingTime) {
  const mode = getScheduleMode();
  const now = new Date();

  if (mode === 'finish') {
    const finishByInput = document.getElementById('finishBy');
    const finishTime = finishByInput ? parseLocalDateTime(finishByInput.value) : null;

    if (!finishTime) {
      return {
        primaryLine: '<p><strong>Target finish time:</strong> Choose a date and time to calculate when to start charging.</p>',
        secondaryLine: '<p class="schedule-note">The calculator will work backwards from your chosen finish time.</p>'
      };
    }

    const recommendedStartTime = new Date(finishTime.getTime() - chargingTime * 60 * 60 * 1000);
    const isPastStartTime = recommendedStartTime.getTime() < now.getTime();

    if (finishTime.getTime() <= now.getTime()) {
      return {
        primaryLine: `<p><strong>Target finish time:</strong> ${formatDateTime(finishTime)}</p>`,
        secondaryLine: '<p class="schedule-warning"><strong>This finish time is in the past.</strong> Choose a future date and time.</p>'
      };
    }

    if (isPastStartTime) {
      return {
        primaryLine: `<p><strong>Target finish time:</strong> ${formatDateTime(finishTime)}</p>`,
        secondaryLine: `<p class="schedule-warning"><strong>You would need to have started charging by:</strong> ${formatDateTime(recommendedStartTime)}</p>`
      };
    }

    return {
      primaryLine: `<p><strong>Start charging by:</strong> ${formatDateTime(recommendedStartTime)}</p>`,
      secondaryLine: `<p><strong>Target finish time:</strong> ${formatDateTime(finishTime)}</p>`
    };
  }

  const completionTime = new Date(now.getTime() + chargingTime * 60 * 60 * 1000);

  return {
    primaryLine: `<p><strong>Charging will complete around:</strong> ${formatDateTime(completionTime)}</p>`,
    secondaryLine: ''
  };
}

function getScheduleMode() {
  const selectedMode = document.querySelector('input[name="scheduleMode"]:checked');
  return selectedMode ? selectedMode.value : 'now';
}

function formatDuration(chargingTime) {
  const totalMinutes = Math.round(chargingTime * 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes} minutes`;
  }

  if (minutes === 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  }

  return `${hours}h ${minutes}m`;
}

function formatDateTime(date) {
  return date.toLocaleString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function parseLocalDateTime(value) {
  if (!value) {
    return null;
  }

  const parts = value.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/);

  if (!parts) {
    return null;
  }

  const [, year, month, day, hour, minute] = parts;
  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute)
  );
}

function setFinishByMinimum() {
  const finishByInput = document.getElementById('finishBy');

  if (!finishByInput) {
    return;
  }

  const now = new Date();
  const offset = now.getTimezoneOffset();
  const localNow = new Date(now.getTime() - offset * 60 * 1000);
  finishByInput.min = localNow.toISOString().slice(0, 16);
}
