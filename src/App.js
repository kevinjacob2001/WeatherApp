import React, { Component } from 'react';

import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY="ba83f1e9b9127f1c19738fc56ba4aa3e";


class App extends Component {

 getWeather=async (e)=>{
e.preventDefault();
  const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}`)
const data=await response.json();
console.log(data);

}



  render(){

  return (
    <div>
<Title/>
<Form getWeather={this.getWeather}/>
<Weather/>
    </div>

  );
}
}
export default App;
