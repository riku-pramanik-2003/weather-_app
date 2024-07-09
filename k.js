const inputBox  = document.querySelector(".input-box");
 const searchBtn  = document.getElementById("searchBtn");
 const weather_img = document.querySelector(".weather-img");
 const temperature  = document.querySelector(".temperature");
 const description  = document.querySelector(".description");
 const humidity = document.getElementById("humidity");
 const wind_speed = document.getElementById("wind-speed");

  async function checkWeather(city){
    const api_key = "b4787a154e9673d950136e680b5c8982";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data =await fetch(`${url}`).then (response => response.json());

    if(weather_data.cod==`404`){
      console.log("error");
      return;
    }
 
   temperature.innerHTML =  `${Math.round(weather_data.main.temp - 273.15)}°C `;

   description.innerHTML = `${weather_data. weather[0].description}`;

   humidity.innerHTML = `${weather_data.main.humidity}%`;

   wind_speed.innerHTML = `${weather_data.wind.speed} KM/H`;

   switch (weather_data.weather[0].main){
     case 'clouds':
      weather_img,src ="https://cdn-icons-png.flaticon.com/512/1135/1135725.png";
       break;
      case 'Clear':
      weather_img,src ="https://cdn-icons-png.flaticon.com/512/1135/1135725.png";
       break;
      case 'Rain':
      weather_img,src ="https://cdn-icons-png.flaticon.com/512/1135/1135725.png";
      break;
      case 'Mist':
      weather_img,src ="https://cdn-icons-png.flaticon.com/512/1135/1135725.png";
       break;
      case 'snow':
      weather_img,src ="https://cdn-icons-png.flaticon.com/512/1135/1135725.png";
       break;   
    }

  }

 searchBtn.addEventListener(`click`, ()=>{
    checkWeather(inputBox.value);
 });


