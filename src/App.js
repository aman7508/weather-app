import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css" 
import { useEffect, useState } from "react";
import './App.css';



function App() {

  const apikey = "b5b44f3bdb665713a3de1d565f4b8a71"
  const [inputcity, setinputcity] = useState("")
  const [data, setData] = useState({})

  const getWeatherDetails = (cityname) =>
  {
    if (!cityname) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid="+apikey
    axios.get(apiURL).then((res)=>{
      console.log("response", res.data)
      setData(res.data)

    }).catch((err)=>{
      console.log("err", err)
    })
  }

  const handleChangeInput= (e) =>
  {
    console.log("value", e.target.value)
    setinputcity(e.target.value)
  }

  const handleSearch = ()=>
  {
    getWeatherDetails(inputcity)
  }

  useEffect(() =>
  {
    getWeatherDetails("delhi")
  },[] )

  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>

      <div className="d-grid gap-4 col-4 mt-4">
        <input type="text" className="form-control" value={inputcity} onChange={handleChangeInput}/>
        <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
      </div>
      </div>

      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
          <img className="weathericon" src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"/>
          <h5 className="weathercity">{data?.name}</h5>
          <h6 className="weathertemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
        </div>
      </div>

    </div>
  );
}

export default App;
