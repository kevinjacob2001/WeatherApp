import React from 'react';


function Weather(props){
        return(
            <div>
                {props.country&&(<h1 >Country code: {props.country}</h1>)}

       {props.city&&(<h1>City {props.city}</h1>)}
      {props.temperature&&( <h1>Temperature {props.temperature}</h1>)}
       {props.humidity&&( <h1>Humidity {props.humidity}</h1>)}
       {props.description&&( <h2>Description:{props.description}</h2>)}
        {props.error&&(<h2>{props.error}</h2>)}
            </div>
        )
    }

export default Weather;