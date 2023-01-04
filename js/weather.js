const API_KEY = "c34ca22c922edf04a581f934fb6c4f4a";


function onGeoOk(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(url);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.JSON()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
       city.innerText =  data.name;
       weather.innerText =  `&{data.weather[0].main} / ${data.main.temp}`;
    });
};

function onGeoError(){
    alert("Can't find you, No weather Info for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);