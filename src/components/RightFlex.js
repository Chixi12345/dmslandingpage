import React from 'react'

const RightFlex = () => {
    return (
        <div className="right_flex">
            <form action="" className="form">
                <div className="flex_rectangle">
                <div className="rectangle_1"></div>
                <div className="rectangle_2"></div>
                </div>
            <h2>Basic Information</h2>
            <p>Enter the following information below</p>
      <div className="form_flex">
      <div className="form_div sided_form margin_right">
                <input type="text" className="form_input " placeholder=" "/>
                <label for="" className="form_label">Company Name</label>
            </div>
            <div className="form_div sided_form margin_left">
                <input type="text" className="form_input " placeholder=" "/>
                <label for="" className="form_label">Last Name</label>
            </div>
            </div>

            <div class="form_div">
                <input type="text" className="form_input" placeholder=" "/>
                <label for="" className="form_label">Company Address</label>
            </div>
            <div class="form_div">
                <input type="text" className="form_input" placeholder=" "/>
                <label for="" className="form_label">Phone Number</label>
            </div>
            <div class="form_div">
                <input type="text" className="form_input" placeholder=" "/>
                <label for="" className="form_label">Company Email Address</label>
            </div>
            <div class="form_div">
                <input type="password" className="form_input" placeholder=" "/>
                <label for="" className="form_label">Password</label>
            </div>

            <p className="terms_paragraph">By clicking "Next" you agree to our <a href="#"> Terms of service, privacy policy </a>, and to receive 
              marketing communication from Envoy.
          </p>
          <div className="flex_bottom">
              <p>Get an account? <a href="#">Sign in </a> </p>
              <button className="button">Register</button>
          </div>
        </form>
           
        
   
        </div>
    )
}

export default RightFlex
