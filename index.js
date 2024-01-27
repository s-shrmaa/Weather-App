let cityName = document.querySelector("input");
let searchBtn = document.querySelector("button");

function checkWeather(city) {
    fetch("https://api.tomorrow.io/v4/weather/realtime?location={city}&apikey=6UUYGW7ENEE1rHNHEhJM6p8BcSTU3iwo")
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            console.log(jsonData);
            document.querySelector("#temperature").innerHTML =jsonData.data.values.temperature + "&deg;C";
            document.querySelector("#humidity").innerHTML =jsonData.data.values.humidity + "%";
            document.querySelector("#windSpeed").innerHTML =jsonData.data.values.windSpeed + "km/h";
        });
}

searchBtn.addEventListener("click", ()=> {
    if(cityName.value != ""){
        checkWeather(cityName.value);
        document.querySelector("#city").innerHTML = cityName.value;
        cityName.value = "";
    }
    else{
        window.alert("Enter a valid city name!!");
    }
})
