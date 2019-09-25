document.getElementById('getweatherbtn').addEventListener('click', weather);






async function weather() {


    let zip = document.getElementById('zipcode').value;



    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=9e8ed380997e80befb16e74fdb844202&zip=${zip}`);
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));


    if (myJson.cod == "400") {

        alert('non valid zip code')
    }

    else {

        let cityname = myJson.name;
        // console.log(cityname);
        document.getElementById("city").innerHTML = cityname;

        let currentWeather = myJson.weather['0'].description;
        // console.log(currentWeather);
        document.getElementById("currentweather").innerHTML = currentWeather;

        let temperature = myJson.main.temp;
        var tempf = document.getElementById("temperaturef");
        var tempc = document.getElementById("temperaturec");
        var tempk = document.getElementById("temperaturek");


        tempf.innerHTML = Math.floor((temperature - 273.15) * 9 / 5 + 32) + " " + "F";
        tempc.innerHTML = Math.floor(temperature - 273.15) + " " + "C";
        tempk.innerHTML = Math.floor(temperature) + " " + "K";


        // console.log(temperature);

        let iconcode = myJson.weather['0'].icon;
        // console.log(weathericon);
        var icon = document.getElementById("weathericon");
        icon.src = `http://openweathermap.org/img/w/${iconcode}.png`;
        console.log('ta');


    }

}