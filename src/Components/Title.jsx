import React, { Component } from 'react';
import { Wave } from 'react-animated-text';

import { SocialIcon } from 'react-social-icons';

class Title extends Component{
    render(){
        return(
            <div >

<h7 className="title-container__title " style={{color:"white"}}>KevJac</h7>


<p className="title-container__subtitle" style={{color:"white"}}>KevJac- provides you with latest the temperature , humidity & real time rain, storm , snow reports and even wind speed!.</p>

<p style={{color:"white",marginTop:"80px"}}>Developed by <h3><Wave text="Kevin Jacob" Speed="0.05"/></h3> ,Connect me via</p>
<SocialIcon url="http://github.com/kevinjacob2001" bgColor="#9400D3" fgColor="#ffffff"/>
<SocialIcon url="http://instagram.com/kevinjacob2001" fgColor="#ffffff" />
<SocialIcon url="https://www.linkedin.com/in/kevinjacob2001/" fgColor="#ffffff" />

            </div>

        )
    }
}

export default Title;