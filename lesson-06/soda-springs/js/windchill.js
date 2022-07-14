function computeWindChill(temperature, windSpeed) {
    return 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16;
}

function windChill() {
    let t = document.querySelector('#temperature').innerHTML;
    let ws = document.querySelector('#wind-speed').innerHTML;

    if (t >= 50 && ws >= 3){
        document.querySelector('#wind-chill').innerHTML = Math.round(computeWindChill(t, ws));
    } else {
        document.querySelector('#wind-chill').innerHTML = "N/A";
    }
}