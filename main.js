document.getElementById('getweatherbtn').addEventListener('click', weather);



async function weather() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=9e8ed380997e80befb16e74fdb844202&zip=42757')
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));


    let cityname = myJson.name;
    console.log(cityname);
    document.getElementById("city").innerHTML = cityname;

    let currentWeather = myJson.weather['0'].description;
    console.log(currentWeather);
    document.getElementById("currentweather").innerHTML = currentWeather;

    let temperature = myJson.main.temp;
    document.getElementById("temperature").innerHTML = temperature;
    console.log(temperature);

    let  = myJson.main.temp;
    document.getElementById("temperature").innerHTML = temperature;
    console.log(temperature);

}