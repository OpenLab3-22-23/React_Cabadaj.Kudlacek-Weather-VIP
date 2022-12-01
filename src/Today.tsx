import { useState } from "react"

export default function Today(){
	const [today,setToday]=useState<string>()
	const [windspeed,setSpeed]=useState<number>()
	const [weather,setWeather]=useState<string>()
	const [city,setCity]=useState<string>()
	const [temp,setTemp]=useState<number>()

	const [nameday1,setBox1]=useState(0)
	const [nameday2,setBox2]=useState(0)
	const [nameday3,setBox3]=useState(0)
	const [nameday4,setBox4]=useState(0)

	const [temp1,setTemp1]=useState(0)
	const [temp2,setTemp2]=useState(0)
	const [temp3,setTemp3]=useState(0)
	const [temp4,setTemp4]=useState(0)



    return(
		<div className="today">
		<div className="now">
			<img src="https://openweathermap.org/img/wn/04n.png" alt="" className="iconweather" />
		  <div className="now_info">
			<h4 className="city">{city}</h4>
			<div className="temp">{temp}</div>
			<div className="windspeed">{windspeed}</div>
			<div className="typeOfWeather">{weather}</div>
		  </div>
		  </div>

			<div className="cover">
				<div className="box">
					<h4 className="day_1" id="day">{nameday1}</h4>
					<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" className="icon_1" id="icon_days" />
					<h4 className="temp_1" id="temp">{temp1}</h4>
				</div>
				<div className="box">
					<h4 className="day_2" id="day">{nameday2}</h4>
					<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" className="icon_2" id="icon_days" />
					<h4 className="temp_2" id="temp">{temp2}</h4>
				</div>
				<div className="box">
					<h4 className="day_3" id="day">{nameday3}</h4>
					<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" className="icon_3" id="icon_days" />
					<h4 className="temp_3" id="temp">{temp3}</h4>
				</div>
				<div className="box">
					<h4 className="day_4" id="day">{nameday4}</h4>
					<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" className="icon_4" id="icon_days" />
					<h4 className="temp_4" id="temp">{temp4}</h4>
				</div>
			</div>
			</div>
    )
}