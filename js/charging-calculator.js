// Charging Calculator JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Update slider values in real-time
  const startCharge = document.getElementById('startCharge');
  const targetCharge = document.getElementById('targetCharge');
  const startValue = document.getElementById('startValue');
  const targetValue = document.getElementById('targetValue');

  if (startCharge && targetCharge && startValue && targetValue) {
    startCharge.addEventListener('input', function() {
      startValue.textContent = this.value + '%';
      validateChargeRange();
    });

    targetCharge.addEventListener('input', function() {
      targetValue.textContent = this.value + '%';
      validateChargeRange();
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
      });
    });

    // Initialize with default calculation
    calculateChargingTime();
  }
});

function calculateChargingTime() {
  const startSoC = parseInt(document.getElementById('startCharge').value);
  const targetSoC = parseInt(document.getElementById('targetCharge').value);
  const chargerType = document.querySelector('.charger-option.selected').dataset.charger;
  
  // Battery specifications for Nissan Leaf 40kWh
  const totalCapacity = 40; // kWh (actual usable ~39kWh)
  const usableCapacity = 39; // kWh
  
  // Calculate energy needed
  const energyNeeded = (targetSoC - startSoC) / 100 * usableCapacity;
  
  let chargingPower, chargerName, efficiency;
  
  if (chargerType === 'slow') {
    chargingPower = 2.3; // kW
    chargerName = 'UK 3-Pin Plug';
    efficiency = 0.85; // Lower efficiency for slow charging
  } else {
    chargingPower = 6.5; // kW (limited by Leaf's 6.6kW onboard charger)
    chargerName = 'Type 2 Charger';
    efficiency = 0.90; // Better efficiency for faster charging
  }
  
  // Apply charging curve effects (non-linear charging)
  let adjustedTime = calculateNonLinearCharging(startSoC, targetSoC, chargingPower, efficiency);
  
  // Display results
  const hours = Math.floor(adjustedTime);
  const minutes = Math.round((adjustedTime - hours) * 60);
  
  let timeString;
  if (hours === 0) {
    timeString = `${minutes} minutes`;
  } else if (minutes === 0) {
    timeString = `${hours} hour${hours > 1 ? 's' : ''}`;
  } else {
    timeString = `${hours}h ${minutes}m`;
  }
  
  document.getElementById('timeDisplay').textContent = timeString;
  document.getElementById('energyInfo').textContent = 
    `Adding ${energyNeeded.toFixed(1)} kWh using ${chargerName}`;
  
  // Calculate completion time
  const now = new Date();
  const completionTime = new Date(now.getTime() + adjustedTime * 60 * 60 * 1000);
  const timeStr = completionTime.toLocaleTimeString('en-GB', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  // Additional details
  const avgPower = energyNeeded / adjustedTime;
  const rangeAdded = (targetSoC - startSoC) / 100 * 149; // ~149 miles WLTP range
  
  document.getElementById('chargingDetails').innerHTML = `
    <p><strong>Charging will complete around:</strong> ${timeStr}</p>
    <p><strong>Range added:</strong> ~${Math.round(rangeAdded)} miles</p>
    <p><strong>Average charging power:</strong> ${avgPower.toFixed(1)} kW</p>
    <p><strong>Efficiency loss:</strong> ~${Math.round((1-efficiency)*100)}%</p>
  `;
  
  document.getElementById('result').classList.remove('hidden');
}

function calculateNonLinearCharging(startSoC, targetSoC, maxPower, baseEfficiency) {
  // Nissan Leaf charging curve simulation
  // Charging slows down significantly above 80% and below 10%
  
  let totalTime = 0;
  const stepSize = 1; // 1% increments for accuracy
  
  for (let soc = startSoC; soc < targetSoC; soc += stepSize) {
    let powerFactor = 1.0;
    let efficiency = baseEfficiency;
    
    // Charging curve adjustments based on SoC
    if (soc < 10) {
      // Very slow at low SoC due to battery protection
      powerFactor = 0.6;
      efficiency *= 0.9;
    } else if (soc < 20) {
      // Slow ramp up
      powerFactor = 0.8;
      efficiency *= 0.95;
    } else if (soc <= 70) {
      // Optimal charging range
      powerFactor = 1.0;
    } else if (soc <= 80) {
      // Start to slow down
      powerFactor = 0.9;
    } else if (soc <= 90) {
      // Significant slowdown
      powerFactor = 0.6;
      efficiency *= 0.9;
    } else {
      // Very slow top-off
      powerFactor = 0.3;
      efficiency *= 0.85;
    }
    
    // Calculate effective power and time for this segment
    const effectivePower = maxPower * powerFactor * efficiency;
    const energyForStep = (stepSize / 100) * 39; // kWh for 1%
    const timeForStep = energyForStep / effectivePower; // hours
    
    totalTime += timeForStep;
  }
  
  return totalTime;
}