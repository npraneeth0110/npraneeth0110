function convert(unit) {
    if (unit === "C") {
        const celsiusInput = document.getElementById("celsius");
        const fahrenheitOutput = document.getElementById("celsiusToFahrenheit");
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
        fahrenheitOutput.textContent = isNaN(fahrenheitValue) ? "" : fahrenheitValue.toFixed(2) + " °F";
    } else if (unit === "F") {
        const fahrenheitInput = document.getElementById("fahrenheit");
        const celsiusOutput = document.getElementById("fahrenheitToCelsius");
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
        celsiusOutput.textContent = isNaN(celsiusValue) ? "" : celsiusValue.toFixed(2) + " °C";
    }
}
