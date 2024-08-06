const form = document.getElementById("form");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const resultcontainer = document.getElementById("result");
const aqiResult = document.getElementById("aqi");
const coResult = document.getElementById("co");
const no2Result = document.getElementById("no2");
const o3Result = document.getElementById("o3");
const pm2Result = document.getElementById("pm2");
const pm10Result = document.getElementById("pm10");
const so2Result = document.getElementById("so2");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;
    const url = `https://air-quality.p.rapidapi.com/current/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a06fc31daemsh4c41581319c086ep176918jsn9e60e2af2de3',
            'x-rapidapi-host': 'air-quality.p.rapidapi.com'
        }
    };
    fetch(url, options)
    .then(Response=>Response.json())
    .then(result=>{
        let readings = result.data[0];
        console.log(readings);
        aqiResult.textContent = readings.aqi;
        coResult.textContent = readings.c0;
        no2Result.textContent = readings.no2;
        pm2Result.textContent = readings.pm2;
        o3Result.textContent = readings.o3;
        pm10Result.textContent = readings.pm10;
        so2Result.textContent = readings.so2;
        resultcontainer.style.display = 'flex';
    });

});