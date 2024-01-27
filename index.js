let cityName = document.querySelector("input");
let searchBtn = document.querySelector("button");
let weatherIcon = document.querySelector("#weatherIcon");
let bgColor = document.querySelector("main");

const apiKey = "80a7ce463987009a56ec6818de98ca7e";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function checkWeather(city) {
    fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            console.log(jsonData);
            document.querySelector("#city").innerHTML = jsonData.name;
            document.querySelector("#temperature").innerHTML =jsonData.main.temp + "&deg;C";
            document.querySelector("#humidity").innerHTML =jsonData.main.humidity + "%";
            document.querySelector("#windSpeed").innerHTML =jsonData.wind.speed + "km/h";

            if(jsonData.weather[0].main == "Haze" || jsonData.weather[0].main == "Clouds"){
                weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/3406/3406981.png";
                bgColor.style.background = "linear-gradient(#868F96, #596164)";
            }
            else if(jsonData.weather[0].main == "Clear"){
                weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/7865/7865955.png";
                bgColor.style.background = "linear-gradient(#D4145A,  #FBB03B)";
            }
            else if(jsonData.weather[0].main == "Mist"){
                weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/13882/13882534.png";
            }
        });
}

searchBtn.addEventListener("click", ()=> {
    if(cityName.value != ""){
        checkWeather(cityName.value);
        cityName.value = "";
    }
    else{
        window.alert("Enter a valid city name!!");
    }
})
