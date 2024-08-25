function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector(".search-input");
    let currentCity = document.querySelector(".current-city");
    currentCity.innerHTML = searchInput.value;
    let apiKey = "c30o4faaf0eefaf1b4fa79t2b027e754";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}`;
    axios.get(apiUrl).then(function (response) {
        console.log(response);
        let temperature = Math.round(response.data.temperature.current);
        let tempsElement = document.querySelector(".current-temperature-value");
        tempsElement.innerHTML = temperature;
    });
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let now = new Date();

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let currentDay = document.querySelector("#current-day");
currentDay.innerHTML = days[now.getDay()];

let currentHours = document.querySelector("#current-hours");
currentHours.innerHTML = now.getHours();

let currentMinutes = document.querySelector("#current-minutes");
if (now.getHours() < 10){
currentMinutes.innerHTML = `0${now.getMinutes()}`;
}
else {
    currentMinutes.innerHTML = `${now.getMinutes()}`;
}