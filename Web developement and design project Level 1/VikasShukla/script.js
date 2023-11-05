document.addEventListener("DOMContentLoaded", function() {
    const inputTemp = document.getElementById("inputTemp");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const convertButton = document.getElementById("convertButton");
    const resultText = document.getElementById("resultText");
  
    convertButton.addEventListener("click", function() {
      const temperature = parseFloat(inputTemp.value);
      const from = fromUnit.value;
      const to = toUnit.value;
  
      if (from === to) {
        resultText.textContent = "Please select different units.";
        return;
      }
  
      if (from === "celsius" && to === "fahrenheit") {
        const convertedTemp = (temperature * 9/5) + 32;
        resultText.textContent = `${temperature}°C is ${convertedTemp}°F`;
      } else if (from === "fahrenheit" && to === "celsius") {
        const convertedTemp = (temperature - 32) * 5/9;
        resultText.textContent = `${temperature}°F is ${convertedTemp}°C`;
      } else {
        resultText.textContent = "Conversion not supported.";
      }
    });
  });
  