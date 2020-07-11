import React from 'react';


function Weather(props){
        return(
            <div>
                {props.country&&props.city&&(<h6 className="weather__key" >Location: 
                    
                  <span>{" "}{props.city},{props.country}</span>
                    
                    </h6>)}
                

    

      {props.temperature&&( <p className="weather__key" >Current temperature:
        <span>{" "} {props.temperature}{"°C"} but feels like {props.feels}{"°C"}</span>
          </p>)}
     
          {props.description&&( <p className="weather__key">Current weather:
           
           <span>{" "}{props.description}</span>
                  
                  </p>)}


       {props.humidity&&( <p className="weather__key">Humidity: 
        <span>{" "}{props.humidity}{"%"}</span>
           </p>)}
           {props.windSpeed&&( <p className="weather__key">Wind Speed: 
        <span>{" "}{props.windSpeed}{"km/hr"}</span>
           </p>)}
    
       
       
        {props.error&&(<h2 className="weather__error">{props.error}</h2>)}
            </div>
        )
    }

export default Weather;