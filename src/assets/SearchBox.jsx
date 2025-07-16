import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = ({updateInfo}) => {
    let [city,setCity]=useState("")
    function handelInput(e){
      setCity(e.target.value);
    }

    let URL='https://api.openweathermap.org/data/2.5/weather';
    let API_KEY='987542c1ccf2c14be0d253d595185491'

    let getWeatherData=async()=>{
      
       let response= await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let  JsonResponse=await response.json();
       console.log(JsonResponse);
       
    let result={
      city: JsonResponse.name,
      temp: JsonResponse.main.temp,
      temp_Min: JsonResponse.main.temp_min,
      temp_Max: JsonResponse.main.temp_max,
       humidity: JsonResponse.main.humidity,
       Weather: JsonResponse.weather[0].description,
     }
     console.log(result)
     return result;
    };


     let handelSubmit =async (e)=>{
     e.preventDefault();
     console.log(city);
     setCity("");
     let newInfo=await getWeatherData();
     updateInfo(newInfo)
    }

      
    
  return (
    <div>
        <form action=""  onSubmit={handelSubmit}>
       <TextField id="city" 
       label="Enter City"
        variant="outlined"
         required 
         onChange={handelInput}
         value={city}
         />
          &nbsp;&nbsp;&nbsp;
        <Button variant="contained"
         style={{height:"3.3rem"}} 
          color=''  
          endIcon={<SearchIcon /> }
           type='submit'
          >search</Button>
           </form>
    </div>
  )
}

export default SearchBox



// 987542c1ccf2c14be0d253d595185491