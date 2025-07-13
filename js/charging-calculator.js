// Empirical Charging Calculator based on real Nissan Leaf 40kWh user data
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
  
  // Calculate percentage increase
  const percentageIncrease = targetSoC - startSoC;
  
  let chargingTime, chargerName, avgPower, energyFromWall;
  
  if (chargerType === 'slow') {
    chargerName = 'UK 3-Pin Plug';
    
    // Empirical formula based on real user data:
    // 77% increase (17% to 94%) = 12 hours
    // This gives us: time = percentage_increase × (12/77) × adjustment_factor
    
    // Base rate: 12 hours for 77% = 0.156 hours per percent
    let baseRateHoursPerPercent = 12 / 77; // 0.156 hours per %
    
    // Apply charging curve adjustments
    let adjustedTime = 0;
    for (let i = 0; i < percentageIncrease; i++) {
      const currentSoC = startSoC + i;
      let timeForThisPercent = baseRateHoursPerPercent;
      
      // Minimal adjustments based on charging curve
      if (currentSoC < 10) {
        timeForThisPercent *= 1.15; // Slightly slower at very low SoC
      } else if (currentSoC >= 90) {
        timeForThisPercent *= 1.4; // Slower above 90%
      } else if (currentSoC >= 85) {
        timeForThisPercent *= 1.2; // Starts to slow above 85%
      }
      // 10% to 85% uses base rate (where your data sits)
      
      adjustedTime += timeForThisPercent;
    }
    
    chargingTime = adjustedTime;
    avgPower = (percentageIncrease * 39 / 100) / chargingTime; // kW to battery
    energyFromWall = chargingTime * 2.3; // Assuming full 2.3kW draw
    
  } else {
    chargerName = 'Type 2 Charger';
    
    // For 6.6kW charger, scale based on power ratio and efficiency
    // Assume 6.6kW is about 2.87x faster than 2.3kW with better efficiency
    let slowChargerTime = (percentageIncrease * 12 / 77);
    
    // Apply same curve adjustments
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
    
    // 6.6kW is 2.87x more powerful, with better efficiency
    chargingTime = adjustedTime / 2.87 * 0.95; // Small penalty for curve differences
    avgPower = (percentageIncrease * 39 / 100) / chargingTime;
    energyFromWall = chargingTime * 6.6 * 0.90; // 90% efficiency for L2
  }
  
  // Display results
  const hours = Math.floor(chargingTime);
  const minutes = Math.round((chargingTime - hours) * 60);
  
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
    `Adding ${(percentageIncrease * 39 / 100).toFixed(1)} kWh using ${chargerName}`;
  
  // Calculate completion time
  const now = new Date();
  const completionTime = new Date(now.getTime() + chargingTime * 60 * 60 * 1000);
  const timeStr = completionTime.toLocaleTimeString('en-GB', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  // Additional details
  const rangeAdded = percentageIncrease / 100 * 148; // miles
  
  document.getElementById('chargingDetails').innerHTML = `
    <p><strong>Charging will complete around:</strong> ${timeStr}</p>
    <p><strong>Range added:</strong> ~${Math.round(rangeAdded)} miles</p>
    <p><strong>Average charging power:</strong> ${avgPower.toFixed(1)} kW</p>
    <p><strong>Energy from wall:</strong> ${energyFromWall.toFixed(1)} kWh</p>
  `;
  
  document.getElementById('result').classList.remove('hidden');
}