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
      </div>
    )
}