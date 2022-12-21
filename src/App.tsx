import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Input from './Input'
import Header from './Header'
import Today from './Today'
import Boxy from './Boxy'

function App() {
  const [city, setCity] = useState("Zilina")
  const [data, setData] = useState(null)

useEffect(()=>{
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=4ed9898ef0d4415dd8423a2a74b26ef8`
    )
    .then((response) => {
      if (!response.ok) {
      alert("No weather found.");
      throw new Error("No weather found.");
      }
      return response.json();
    })
    .then((data) => setData(data));
},[])



  return (
    <div className="container"> 
      <Header/>
      <Input value={city} onChange={setCity}/>
      {data && <Today today={data.city.name} temp={data.list[0].main.temp + "°C"} windspeed={data.list[0].wind.speed + " km/h"} weather={data.list[0].weather[0].description} nameday1={data.list[7].dt_txt} temp1={data.list[7].main.temp + "°C"} nameday2={data.list[15].dt_txt} temp2={data.list[15].main.temp + "°C"} nameday3={data.list[23].dt_txt} temp3={data.list[23].main.temp + "°C"} nameday4={data.list[31].dt_txt} temp4={data.list[31].main.temp + "°C"}/>
}
   </div>
  )
}

let weather = {
  fetchWeather: function (city:string) {
    },
   

    // document.querySelector(".temp")!.innerText = data.list[0].main.temp + "°C";
    // document.querySelector(".windspeed")!.innerText = data.list[0].wind.speed + " km/h";
    // document.querySelector(".typeOfWeather")!.innerText = data.list[0].weather[0].description;
    // document.querySelector(".iconweather").src ="https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png";

    // document.querySelector(".day_1")!.innerText =  data.list[7].dt_txt;
    // document.querySelector(".day_2")!.innerText =  data.list[15].dt_txt;
    // document.querySelector(".day_3")!.innerText =  data.list[23].dt_txt;
    // document.querySelector(".day_4")!.innerText =  data.list[31].dt_txt;

    // document.querySelector(".icon_1").src ="https://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + ".png";
    // document.querySelector(".icon_2").src ="https://openweathermap.org/img/wn/" + data.list[15].weather[0].icon + ".png";
    // document.querySelector(".icon_3").src ="https://openweathermap.org/img/wn/" + data.list[23].weather[0].icon + ".png";
    // document.querySelector(".icon_4").src ="https://openweathermap.org/img/wn/" + data.list[31].weather[0].icon + ".png";

    // document.querySelector(".temp_1")!.innerText =   data.list[7].main.temp + "°C";
    // document.querySelector(".temp_2")!.innerText =   data.list[15].main.temp + "°C";
    // document.querySelector(".temp_3")!.innerText =   data.list[23].main.temp + "°C";
    // document.querySelector(".temp_4")!.innerText =   data.list[31].main.temp + "°C";
  }
  
  // search: function () {
  //   this.fetchWeather(document.querySelector(".search-bar")!.value);
  // },
  
  // document.querySelector(".btn")!.addEventListener("button", function () {
  // weather.search();
  // });
  
  // document.querySelector(".search-bar")
  // .addEventListener("keyup", function (event) {
  //   if (event.key == "Enter") {
  //   weather.search();
  //   }
  // });
  // weather.fetchWeather("...");

export default App
