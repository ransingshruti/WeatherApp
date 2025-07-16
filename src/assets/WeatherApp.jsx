import React from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import './WeatherApp.css'
import { useState } from 'react'

const WeatherApp = () => {
let [WeatherData,setWeatherData]=useState({
     city:"Pune",
    temp:27,
    temp_Min:28,
    temp_Max:30,
    humidity:67,
    Weather:"Haze"
})

let updateInfo=(newInfo)=>{
setWeatherData(newInfo);
}

  return (
    <div className='WeatherApp'>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox WeatherData={WeatherData}/>
    </div>
  )
}

export default WeatherApp
