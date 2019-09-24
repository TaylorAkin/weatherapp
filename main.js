document.getElementById('getweatherbtn').addEventListener('click', weather);



async function weather() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=9e8ed380997e80befb16e74fdb844202&zip=40511')
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));

    
    let city = myJson.name;
    document.getElementById('city');
    var citytxt = document.createTextNode(city);

    citytxt.appendChild(city);



    

}