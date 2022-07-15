const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temperature').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;
  });

const apiURLf = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial';
fetch(apiURLf)
  .then((response) => response.json())
  .then((jsObject) => {
    const dayList = jsObject.list;

    let index=0;
    dayList.forEach(element => {
        if (element.dt_txt.includes("18:00:00")){
            const iconClass = document.getElementsByClassName('iconf');
            const forecastClass = document.getElementsByClassName('forecast');
            forecastClass[index].textContent = element.weather[0].main;
            const imagesrc = 'https://openweathermap.org/img/w/' + element.weather[0].icon + '.png';
            const desc = element.weather[0].description;
            iconClass[index].setAttribute('src', imagesrc);  
            iconClass[index].setAttribute('alt', desc);
            index += 1;
        }
    });
  });