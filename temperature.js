function convertTemperature() {
    let temperature = parseFloat(document.getElementById('tempInput').value);
    let unit = document.getElementById('unitSelect').value;
    let result = document.getElementById('result');

    if (isNaN(temperature)) {
        result.innerHTML = 'Please enter a valid number.';
        return;
    }

    if (unit === 'celsius') {
        result.innerHTML = `Converted Temperature: ${(temperature * 9/5) + 32} Fahrenheit`;
    } else if (unit === 'fahrenheit') {
        result.innerHTML = `Converted Temperature: ${(temperature - 32) * 5/9} Celsius`;
    } else if (unit === 'kelvin') {
        result.innerHTML = `Converted Temperature: ${temperature + 273.15} Kelvin`;
    }
}
