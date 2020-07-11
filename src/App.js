import React, { Component } from 'react';

import './App.css';




import 'bootstrap/dist/css/bootstrap.min.css';

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
  error:undefined,
  feels:undefined

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
this.setState({feels:data.main.feels_like})
this.setState({humidity:data.main.humidity})
this.setState({description:data.weather[0].description})
this.setState({error:""})
}
else{
  this.setState({city:undefined})
this.setState({country:undefined})
this.setState({temperature:undefined})
this.setState({feels:undefined})
this.setState({humidity:undefined})
this.setState({description:undefined})
this.setState({error:"Please fill up the input fields!"})
}
}



  render(){

  return (
    <div>
 
<div className="wrapper">
  <div className="main">
    <div className="container">
      <div className="row">
<div className="col-6 title-container">
<Title/>



</div>


<div className="col-6 form-container">

<Form getWeather={this.getWeather}/>
<Weather 
country={this.state.country} 
city={this.state.city} 
temperature={this.state.temperature} 
feels={this.state.feels}
humidity={this.state.humidity} 
description={this.state.description}
error={this.state.error}
/>

</div>
      </div>
    </div>
  </div>
</div>



    </div>

  );
}
}





export default App;
