import { useState } from "react"
import Boxy from './Boxy'
import Boxy1 from './Boxy1'
import Boxy2 from './Boxy2'
import Boxy3 from './Boxy3'


export default function Today(){
	const [today,setToday]=useState<string>("Kysucke nove mesto")
	const [temp,setTemp]=useState<number>(3)
	const [windspeed,setSpeed]=useState<number>(1)
	const [weather,setWeather]=useState<string>("Oblacno")

	const [nameday1,setBox1]=useState<string>("Pondelok")
	const [nameday2,setBox2]=useState<string>("Utorok")
	const [nameday3,setBox3]=useState<string>("Streda")
	const [nameday4,setBox4]=useState<string>("Stvrtok")

	const [temp1,setTemp1]=useState<number>(0)
	const [temp2,setTemp2]=useState<number>(0)
	const [temp3,setTemp3]=useState<number>(0)
	const [temp4,setTemp4]=useState<number>(0)

    return(
		<div className="today">
		<div className="now">
			<img src="https://openweathermap.org/img/wn/04n.png" alt="" className="iconweather" />
		  <div className="now_info">
			<h4 className="city">{today}</h4>
			<div className="temp">{temp}</div>
			<div className="windspeed">{windspeed}</div>
			<div className="typeOfWeather">{weather}</div>
		  </div>
		  </div>
		  <div className="cover">
		  <Boxy den1={"Utorok"}/>
          <Boxy1 den2={"Streda"}/>
    	  <Boxy2 den3={"Stvrtok"}/>
    	  <Boxy3 den4={"Piatok"}/>
		  </div>
		  </div>
    )
}
