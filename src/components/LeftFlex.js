import React from 'react'
import Rider from './assets/scooter1.png'
import RightFlex from './RightFlex'

const LeftFlex = () => {
    return (
        <div className="body_flex">
            <div className="left_flex">
            <img src={Rider} alt="Scooter Rider"/>
            <h2>Let's help you manage your riders and delivery systems</h2>
            <p>Every logistics company whether its a multi-national 
                branding corporation or a regular local deserves the 
                basic standard necessities in achieving in very high 
                service delivery </p>
                <input type="submit" className="button" value="Get Started"/>
        </div>
        <RightFlex/>
        </div>
      
    )
}

export default LeftFlex
