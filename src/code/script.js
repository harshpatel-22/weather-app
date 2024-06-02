const apiKey = "3e08a016cc5fe573b28074c7ebc7bd27";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " m/s";
    
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "/src/img/clouds.png";
        }
        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "/src/img/clear.png";
        }
        if (data.weather[0].main == "Rain") {
            weatherIcon.src = "/src/img/rain.png";
        }
        if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "/src/img/drizzle.png";
        }
        if (data.weather[0].main == "mist") {
            weatherIcon.src = "/src/img/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
   
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});


