import React from "react";
// Profilesection parent component: mainsectionSection2.js
function Profilesection(props) {
  let image = require("../images/insta-login-image.png");

return (
    <div className="containerProfile">
      <img 
      src={image} 
      // src="https://source.unsplash.com/random" 
      alt="profile_image" />
      <div className="names">
        <p>_vikas_bisht</p>
        <p>Vikas Bisht</p>
      </div>
      <div className="signout-box">
        <button className="signoutbtn" onClick = {props.passState3_signoutHandle}>sign out</button>
      </div>
    </div>
  );
}

export default Profilesection;
