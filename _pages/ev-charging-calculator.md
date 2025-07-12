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