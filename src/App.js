import React, { Component } from 'react';

import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY="ba83f1e9b9127f1c19738fc56ba4aa3e";


class App extends Component {

state={
  country:undefined,
  city:undefined,
  temperature:undefined,
  humidity:undefined,
  description:undefined,
  error:undefined

}


  
 getWeather=async (e)=>{
e.preventDefault();
const city=e.target.elements.city.value;
const country=e.target.elements.country.value;
const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
const data=await response.json();

if(city&&country){
this.setState({city:data.name})
this.setState({country:data.sys.country})
this.setState({temperature:data.main.temp})
this.setState({humidity:data.main.humidity})
this.setState({description:data.weather[0].description})
this.setState({error:""})
}
else{
  this.setState({city:undefined})
this.setState({country:undefined})
this.setState({temperature:undefined})
this.setState({humidity:undefined})
this.setState({description:undefined})
this.setState({error:"please complete the input field"})
}
}



  render(){

  return (
    <div>
<Title/>
<Form getWeather={this.getWeather}/>
<Weather 
country={this.state.country} 
city={this.state.city} 
temperature={this.state.temperature} 
humidity={this.state.humidity} 
description={this.state.description}
error={this.state.error}
/>
    </div>

  );
}
}
export default App;
