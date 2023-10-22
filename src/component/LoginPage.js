import React from "react";

function LoginPage(props) {
  let instaLoginImage = require("../images/insta-login-image.png");
  let playstore = require("../images/playstore.png");
  let microsoft = require("../images/microsoft.png");

  return (
    <div className="login-outer-container">
      <div className="login-inner-container">
        <div className="loginPage-pic  login-elem">
          <img src={`${instaLoginImage}`} alt="instaLoginImage" />
        </div>

        <div className="form-side">
          {/*  props.onSubmit => it is basically running submitHandler function , defined in App.js */}

          {/* <form className="loginPage-form login-elem" onSubmit={submitHandler}>  ------------------------will be removed*/}
          <form className="loginPage-form login-elem" onSubmit={props.onSubmit} >
            <h1 className="insta">Instagram</h1>
            <input
              autoComplete="off"
              className="input-box"
              type="text"
              placeholder="Phone number, username, or email"
              //  props.onChange = it is basically running changeHandler function , defined in App.js

              // onChange={changeHandler} ------------------------ will be removed
              onChange={props.onChange}
              name="username"
              //  props.LogInFormData.username = it is basically getting the value of formData state's username attribute, defined in App.js
               value={props.LogInFormData.username}
              //this will validate the form , if field is filled
              required
            />
            <input
              autoComplete="off"
              className="input-box"
              type="password"
              placeholder="Password"
              onChange={props.onChange}
              name="password"
              value={props.LogInFormData.password}
              required
            />
            <button id="login-btn"> Log in</button>
            {!props.LogInFormData.isCorrect && (
              <p className="errorMsg">{props.LogInFormData.validationMsg}</p>
            )}



             <p className="or">OR</p>
            <p id="loginwithfb">
              <b>Log in with Facebook</b>
            </p>
            <p id="loginwithfb">Forgot password?</p>
          </form>

          {/* challenge: Make this signup button working */}

          <div className="signup-link-box">
            <p>
              Don't have an account?{" "}
              <b className="signup" onClick={props.onClickSingUp}>
                Sign up
              </b>
            </p>
          </div>

          <div className="Get-the-app">
            <p>Get the app</p>
          </div>

          <div className="app-image-box">
            <img src={`${playstore}`} alt="playstore" />
            <img src={`${microsoft}`} alt="microsoft" />
          </div>
        </div>
      </div>
      <div className="credits">
        <p>
          Designed and developed by <b>Vikas Bisht</b>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
