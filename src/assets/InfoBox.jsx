import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './infoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
const InfoBox = ({WeatherData}) => {
//const img_url='https://media.istockphoto.com/id/1126605395/photo/delhi-air-pollution.jpg?s=2048x2048&w=is&k=20&c=XUt53v34sWlMDc87wI-oii--UCp6CuweXYeYu_mLWhM='   
const hot_url='https://media.istockphoto.com/id/1150860710/photo/heat-wave-of-extreme-sun-and-sky-background-hot-weather-with-global-warming-concept.jpg?s=2048x2048&w=is&k=20&c=Zo_563dYtt_tuvWxriBuVklgxlYkeSQXEcEpbf5sUZw='
const cold_url='https://images.unsplash.com/photo-1641154464135-9c90a7ce3b9d?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const rain_url='https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


  return (
    <div>
     <br />
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia className='image'
        sx={{ height: 140 }}
        image={WeatherData.humidity>80?rain_url: WeatherData.temp>15?hot_url:cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {WeatherData.city} {WeatherData.humidity>80?<ThunderstormIcon/>:WeatherData.temp>15?<SunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       
         
         <h3> Temp: {WeatherData.temp}&deg;C <br />   </h3>
          <h3>Temp_Min: {WeatherData.temp_Min}&deg;C <br />  </h3>
          <h3>Temp_Max: {WeatherData.temp_Max}&deg;C <br />  </h3>
          <h3>Humidity : {WeatherData.humidity} <br />  </h3>
          <h3>Weather : {WeatherData.Weather}  </h3>
       
        </Typography>
      </CardContent>
      
    </Card>
    </div>
  )
}

export default InfoBox