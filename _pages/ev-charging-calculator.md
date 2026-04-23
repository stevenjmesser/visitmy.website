---
layout: default
title: Nissan Leaf 40kWh Charging Calculator
description: Calculate charging time for your Nissan Leaf 40kWh
permalink: /ev-charging-calculator/
---

# 🔋 Leaf Charging Calculator

Calculate charging time for your Nissan Leaf 40kWh

---

<div class="charging-calculator">
  <div class="input-group">
    <label for="startCharge">Starting Charge Level</label>
    <div class="input-row">
      <div class="slider-container">
        <input type="range" id="startCharge" class="slider" min="0" max="100" value="11">
      </div>
      <div class="value-display" id="startValue">11%</div>
    </div>
  </div>

  <div class="input-group">
    <label for="targetCharge">Target Charge Level</label>
    <div class="input-row">
      <div class="slider-container">
        <input type="range" id="targetCharge" class="slider" min="0" max="100" value="80">
      </div>
      <div class="value-display" id="targetValue">80%</div>
    </div>
  </div>

  <div class="input-group">
    <label>Charger Type</label>
    <div class="charger-select">
      <div class="charger-option selected" data-charger="slow">
        <div class="charger-title">UK 3-Pin Plug</div>
        <div class="charger-power">2.3kW (Slow)</div>
      </div>
      <div class="charger-option" data-charger="type2">
        <div class="charger-title">Type 2 Charger</div>
        <div class="charger-power">6.5kW</div>
      </div>
    </div>
  </div>

  <div class="input-group">
    <label>Scheduling</label>
    <div class="schedule-select" role="radiogroup" aria-label="Charging schedule">
      <label class="schedule-option selected" for="scheduleNow">
        <input type="radio" id="scheduleNow" name="scheduleMode" value="now" checked>
        <div class="schedule-title">Start charging now</div>
        <div class="schedule-copy">Estimate when charging is likely to finish.</div>
      </label>
      <label class="schedule-option" for="scheduleFinish">
        <input type="radio" id="scheduleFinish" name="scheduleMode" value="finish">
        <div class="schedule-title">Finish by a chosen date and time</div>
        <div class="schedule-copy">Work backwards to find the best time to start charging.</div>
      </label>
    </div>
  </div>

  <div class="input-group finish-by-group hidden" id="finishByGroup">
    <label for="finishBy">Target finish date and time</label>
    <input type="datetime-local" id="finishBy" class="datetime-input">
    <p class="input-help">Choose when you would like the car to reach your target charge level.</p>
  </div>

  <button class="calculate-btn" onclick="calculateChargingTime()">
    Calculate Charging Time
  </button>

  <div id="result" class="result hidden">
    <div class="time-display" id="timeDisplay"></div>
    <div class="energy-info" id="energyInfo"></div>
    <div class="charging-details" id="chargingDetails"></div>
  </div>

  <div class="warning">
    <strong>⚠️ 3-Pin Charging Safety:</strong> Only use 3-pin charging occasionally. Ensure your socket is in good condition and avoid extension leads. Consider upgrading to a dedicated home charger for regular use.
  </div>
</div>

<script src="{{ '/js/charging-calculator.js' | relative_url }}"></script>