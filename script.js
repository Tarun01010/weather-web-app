const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const city = document.getElementById("city");
const btn = document.getElementById("btn");


window.onload = () => {
        // Ask for location permission automatically when page loads
        navigator.geolocation.getCurrentPosition(success, error);
};

async function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetch_data(lat, lon);

}

async function fetch_data(lat, lon){
    const API_KEY = "e9122b7eef3302ec748e351893dc8064";

    // Fetch weather using current location
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        
    );
    const data = await res.json();
    showWeather(data);
}

function error() {
    temp.innerText = "Please allow location access to show weather.";
}

function showWeather(data) {
    temp.innerText = `Temperature: ${data.main.temp}°C`;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    wind.innerText = `Wind Speed: ${data.wind.speed} m/s`;
}

btn.addEventListener("click", (event) => {
    event.preventDefault();
    
});