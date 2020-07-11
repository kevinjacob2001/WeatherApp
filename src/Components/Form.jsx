import React from 'react';
import { Component } from 'react';


class Form extends Component{
    render(){
        return(
            <div >
    <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button style={{marginRight:"30px"}}>Get weather!</button>
    </form> 
      
</div>
             )
        }
}

export default Form;