export default function Today(){
    return(
		<div className="today">
		<div className="now">
			<img src="https://openweathermap.org/img/wn/04n.png" alt="" className="iconweather" />
		  <div className="now_info">
			<h4 className="city">....</h4>
			<div className="temp">°C</div>
			<div className="windspeed">6.2 km/h</div>
			<div className="typeOfWeather">Sunny</div>
		  </div>
		  </div>

			<div className="cover">
				<div className="box">
					<h4 className="day_1" id="day">Wednesday</h4>
					<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" className="icon_1" id="icon_days" />
					<h4 className="temp_1" id="temp">...</h4>
				</div>
				<div className="box">
					<h4 className="day_2" id="day">Thursday</h4>
					<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" className="icon_2" id="icon_days" />
					<h4 className="temp_2" id="temp">...</h4>
				</div>
				<div className="box">
					<h4 className="day_3" id="day">Friday</h4>
					<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" className="icon_3" id="icon_days" />
					<h4 className="temp_3" id="temp">...</h4>
				</div>
				<div className="box">
					<h4 className="day_4" id="day">Saturday</h4>
					<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" className="icon_4" id="icon_days" />
					<h4 className="temp_4" id="temp">...</h4>
				</div>
			</div>
			</div>
    )
}