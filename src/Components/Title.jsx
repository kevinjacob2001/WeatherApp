import React, { Component } from 'react';

import { SocialIcon } from 'react-social-icons';

class Title extends Component{
    render(){
        return(
            <div >

<h7 className="title-container__title " style={{color:"white"}}>Weather Finder</h7>

<p className="title-container__subtitle" style={{color:"white"}}>Find out the temperature,other climatic conditions.</p>

<p style={{color:"white",marginTop:"80px"}}>Developed by <h3>Kevin Jacob</h3> ,Connect me via</p>
<SocialIcon url="http://github.com/kevinjacob2001" bgColor="#9400D3" fgColor="#ffffff"/>
<SocialIcon url="http://instagram.com/kevinjacob2001" fgColor="#ffffff" />
<SocialIcon url="https://www.linkedin.com/in/kevinjacob2001/" fgColor="#ffffff" />
            </div>

        )
    }
}

export default Title;