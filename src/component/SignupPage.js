import React from "react";

function SignupPage(props) {
  return (
    <>
      <div className="signup-outer-box">
      <div className="signup-inner-box"> 
        <form className="form-box" onSubmit={props.onSignUpSubmit}>
          <h1 className="insta2">Instagram</h1>
          <div className="oneliner">
            <p>Sign up to see photos and videos </p> 
            <p>from your friends.</p>
          </div>
          <input autoComplete = "off"
            className="input-box"
            type="text"
            placeholder="Mobile number, or email"
            //  props.onChange = it is basically running changeHandler function , defined in App.js

            // onChange={changeHandler} ------------------------ will be removed
            onChange={props.onChange}
            name="mobileoremail"
            //  props.singupformData.username = it is basically getting the value of formData state's username attribute, defined in App.js

            // value={formData.username} ------------------------ will be removed
            value={props.singupformData.mobileoremail}
          />
          <input autoComplete = "off"
            className="input-box"
            type="text"
            placeholder="Fullname"
            //  props.onChange = it is basically running changeHandler function , defined in App.js

            // onChange={changeHandler} ------------------------ will be removed
            onChange={props.onChange}
            name="fullname"
            //  props.singupformData.username = it is basically getting the value of formData state's username attribute, defined in App.js

            // value={formData.username} ------------------------ will be removed
            value={props.singupformData.fullname}
          />
          <input autoComplete = "off"
            className="input-box"
            type="text"
            placeholder="Username"
            //  props.onChange = it is basically running changeHandler function , defined in App.js

            // onChange={changeHandler} ------------------------ will be removed
            onChange={props.onChange}
            name="username"
            //  props.singupformData.username = it is basically getting the value of formData state's username attribute, defined in App.js

            // value={formData.username} ------------------------ will be removed
            value={props.singupformData.username}
          />
          <input autoComplete = "off"
            className="input-box"
            type="password"
            placeholder="Password"
            //  props.onChange = it is basically running changeHandler function , defined in App.js
            // onChange={changeHandler} ------------------------ will be removed

            onChange={props.onChange}
            name="password"
            //  props.singupformData.password = it is basically getting the value of formData state's username attribute, defined in App.js

            // value={formData.password} ------------------------ will be removed
            value={props.singupformData.password}
          />
          <button id="login-btn" className="signup-btn">
            {" "}
            Sign up
          </button>
        </form>

        <div className="login-link-box">
          <p>
            {/* this log in button will revert the signUpIsActive in app.js to false */}
            Have an account?{" "}
            <b className="signup" onClick={props.onClickSingUp}>
              Log in
            </b>
          </p>
        </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
