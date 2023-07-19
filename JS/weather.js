const API_KEY = `2782053a8afb1616016ab4880247132a`;

function geoSuccess (position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherHtml = document.querySelector("#weather span:first-child");
            const cityHtml = document.querySelector("#weather span:last-child");
            weatherHtml.innerText =`${data.weather[0].main} / ${data.main.temp}`;
            cityHtml.innerText = data.name;

        });
}

function geoError(){
    alert("Can't find you.");
}



navigator.geolocation.getCurrentPosition(geoSuccess,geoError);