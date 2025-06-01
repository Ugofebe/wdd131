// Calculate and display wind chill
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16));
}

// Display wind chill if conditions are met
function displayWindChill() {
    const temp = 32; // Static temperature in °C (typical Nigerian weather)
    const windSpeed = 8; // Static wind speed in km/h
    const windchillElement = document.getElementById('windchill');
    
    if (temp <= 10 && windSpeed > 4.8) {
        const windchill = calculateWindChill(temp, windSpeed);
        windchillElement.textContent = `${Math.round(windchill)}°C`;
    } else {
        windchillElement.textContent = "N/A";
    }
}

// // Footer dynamic content
// document.addEventListener('DOMContentLoaded', () => {
//     // Current year
//     document.getElementById('currentyear').textContent = new Date().getFullYear();
    
//     // Last modified date
//     document.getElementById('lastmodified').textContent += document.lastModified;
    
//     // Calculate wind chill
//     displayWindChill();
// });

// Get current year for copyright
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent += lastModified;