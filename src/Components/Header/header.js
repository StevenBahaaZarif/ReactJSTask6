import React, { useState } from "react";
import './header.css';
function Header() {


    return ( 
       
           
        <div class="w3-container w3-center"  id="home" style={{marginTop:40}}>
              <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <h1 class="w3-jumbo"><b>Steven Bahaa</b></h1>
            <p>Full Stack Developer</p>
            <img src="/w3images/profile_girl.jpg" class="w3-image w3-hide-large w3-hide-small w3-round" id="img1"/>
            <img src="/w3images/profile_girl.jpg" class="w3-image w3-hide-large w3-hide-medium w3-round" width="1000" height="1333"/>
            <button class="w3-button w3-light-grey w3-padding-large w3-margin-top">
            <i class="fa fa-download"></i> Download Resume
            </button>
        </div>
 

     );
}

export default Header;