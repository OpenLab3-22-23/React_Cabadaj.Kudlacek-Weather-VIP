export default function Boxy(){
    return(
		

        <div className="cover">
			<div className="box">
				<h4 className="day_1" id="day">{day1}</h4>
				<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" className="icon_1" id="icon_days" />
				<h4 className="temp_1" id="temp">...</h4>
			</div>
			<div className="box">
				<h4 className="day_2" id="day">{day2}</h4>
				<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" className="icon_2" id="icon_days" />
				<h4 className="temp_2" id="temp">...</h4>
			</div>
			<div className="box">
				<h4 className="day_3" id="day">{day3}</h4>
				<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" className="icon_3" id="icon_days" />
				<h4 className="temp_3" id="temp">...</h4>
			</div>
			<div className="box">
				<h4 className="day_4" id="day">{day4}</h4>
				<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" className="icon_4" id="icon_days" />
				<h4 className="temp_4" id="temp">...</h4>
			</div>
		</div>

    )
}