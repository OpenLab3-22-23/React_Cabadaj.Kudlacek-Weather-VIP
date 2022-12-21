import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Input from './Input'
import Header from './Header'
import Today from './Today'
import Boxy from './Boxy'

function App() {
  const [city, setCity] = useState("Horný Vadičov")
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
      <Input value={city} onChange={setCity} />
      {data && <Today 
      today={data.city.name}
      temp={data.list[0].main.temp + "°C"} 
      windspeed={data.list[0].wind.speed + " km/h"} 
      weather={data.list[0].weather[0].description} 
      nameday1={data.list[7].dt_txt} 
      temp1={data.list[7].main.temp + "°C"} 
      nameday2={data.list[15].dt_txt} 
      temp2={data.list[15].main.temp + "°C"} 
      nameday3={data.list[23].dt_txt} 
      temp3={data.list[23].main.temp + "°C"} 
      nameday4={data.list[31].dt_txt} 
      temp4={data.list[31].main.temp + "°C"}
      picturemain={"https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png"}
      picture1={"https://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + ".png"}
      picture2={"https://openweathermap.org/img/wn/" + data.list[15].weather[0].icon + ".png"}
      picture3={"https://openweathermap.org/img/wn/" + data.list[23].weather[0].icon + ".png"}
      picture4={"https://openweathermap.org/img/wn/" + data.list[31].weather[0].icon + ".png"}/>
      }
   </div>
  )
}

let weather = {
  fetchWeather: function (city:string) {
    },
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
