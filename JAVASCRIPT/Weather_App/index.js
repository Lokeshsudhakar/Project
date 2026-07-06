const apikey = "351987d1f8eb19d9538c8b07a986ab6a";

const inputBox = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");

searchBtn.onclick = async () => {
    const cityName = inputBox.value.trim();
    if (!cityName) {
        alert("Please enter a city name.");
        return;
    }

    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`);
        const data = await res.json();

        if (!res.ok) {
            if (data.cod === "404" || data.cod === 404) {
                alert("City not found!");
            } else {
                alert("Unable to fetch weather data.");
            }
            return;
        }

        // Updating DOM elements safely
        document.querySelector(".city").innerHTML = `${data.name}, ${data.sys.country}`;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".status").textContent = data.weather?.[0]?.main || data.weather?.[0]?.description || "Unknown";
        
    } catch (error) {
        alert("An error occurred while fetching data.");
    }
};