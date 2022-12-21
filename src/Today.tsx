import { useState } from "react"

export default function Today({today,temp,windspeed,weather,nameday1,temp1,nameday2,temp2,nameday3,temp3,nameday4,temp4,picturemain,picture1,picture2,picture3,picture4}){


    return(
		<div className="today">
		<div className="now">
			<img src={picturemain} alt="" className="iconweather"/>
		  <div className="now_info">
			<h4 className="city">{today}</h4>
			<div className="temp">{temp}</div>
			<div className="windspeed">{windspeed}</div>
			<div className="typeOfWeather">{weather}</div>
		  </div>
		  </div>

				<div className="cover">
					<div className="box">
						<h4 className="day_1" id="day">{nameday1}</h4>
						<img src={picture1} alt="Ikona pocasia" className="icon_1" id="icon_days" />
						<h4 className="temp_1" id="temp">{temp1}</h4>
					</div>
					<div className="box">
						<h4 className="day_2" id="day">{nameday2}</h4>
						<img src={picture2} alt="Ikona pocasia" className="icon_2" id="icon_days" />
						<h4 className="temp_2" id="temp">{temp2}</h4>
					</div>
					<div className="box">
						<h4 className="day_3" id="day">{nameday3}</h4>
						<img src={picture3} alt="Ikona pocasia" className="icon_3" id="icon_days" />
						<h4 className="temp_3" id="temp">{temp3}</h4>
					</div>
					<div className="box">
						<h4 className="day_4" id="day">{nameday4}</h4>
						<img src={picture4} alt="Ikona pocasia" className="icon_4" id="icon_days" />
						<h4 className="temp_4" id="temp">{temp4}</h4>
					</div>
				</div>
			</div>
    )



}