
async function getData(){
 const cityname=document.getElementById("cityname");
 const country=document.getElementById("country");
 const weatherCondition=document.getElementById("weatherCondition");
 const temperature=document.getElementById("temperature");
 const pressure=document.getElementById("pressure");
 const windspeed=document.getElementById("windspeed");
 const humidity=document.getElementById("humidity");
 const weathericon=document.getElementById("weathericon")
 const feelsliketemp=document.getElementById("feelsliketemp")
 const button=document.getElementById("button");
 const dateElement = document.getElementById("date");

    const response= await fetch('https://api.openweathermap.org/data/2.5/weather?q=Barasat&lat=57&lon=-2.15&appid=b47c4825a61febc09405d85ef9ad589e&units=metric');
    const data= await response.json();
    if (data.cod === '404') {
         alert('City not found. Please enter a valid city.');
         return;
     }
    console.log(data);
    cityname.textContent=data.name;
    country.textContent=data.sys.country;
    weatherCondition.textContent=data.weather[0].main;
    temperature.textContent=data.main.temp+"°C";
    feelsliketemp.textContent="Feels Like: "+data.main.feels_like+"°C";
    pressure.textContent= "Pressure: "+data.main.pressure+"pa";
    humidity.textContent= "Humidity: "+data.main.humidity+"%";
    windspeed.textContent="Wind Speed: "+data.wind.speed+" km/h";
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
     weathericon.src = iconUrl;

     const showDate = new Date();
     let formattedDate = showDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
     var dayOfWeek = showDate.getDay();
     var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     var dayName = daysOfWeek[dayOfWeek];

     dateElement.textContent = `${dayName}, ${formattedDate}`;

 }
getData()

async function getWetherData(city){
 const cityname=document.getElementById("cityname");
 const country=document.getElementById("country");
 const weatherCondition=document.getElementById("weatherCondition");
 const temperature=document.getElementById("temperature");
 const pressure=document.getElementById("pressure");
 const windspeed=document.getElementById("windspeed");
 const humidity=document.getElementById("humidity");
 const weathericon=document.getElementById("weathericon")
 const feelsliketemp=document.getElementById("feelsliketemp")
 const button=document.getElementById("button");
 const dateElement = document.getElementById("date");
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b47c4825a61febc09405d85ef9ad589e&units=metric`);
    const data= await response.json();
    if (data.cod === '404') {
         alert('City not found. Please enter a valid city.');
         return;
     }
    console.log(data);
    cityname.textContent=data.name;
    country.textContent=data.sys.country;
    weatherCondition.textContent=data.weather[0].main;
    temperature.textContent=data.main.temp+"°C";
    feelsliketemp.textContent="Feels Like: "+data.main.feels_like+"°C";
    pressure.textContent= "Pressure: "+data.main.pressure+"pa";
    humidity.textContent= "Humidity: "+data.main.humidity+"%";
    windspeed.textContent="Wind Speed: "+data.wind.speed+" km/h";
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
     weathericon.src = iconUrl;
     
     const showDate = new Date();
     let formattedDate = showDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
     var dayOfWeek = showDate.getDay();
     var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     var dayName = daysOfWeek[dayOfWeek];

     dateElement.textContent = `${dayName}, ${formattedDate}`;                                                                                                                                                                                                                                                                                      0


 }
 button.addEventListener("click",()=>{
     getWetherData(cityInput.value);
 })
