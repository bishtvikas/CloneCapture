import React from "react";
import LoginPage from "./LoginPage";
import Homepage from "./Homepage";
import SignupPage from "./SignupPage";

function App() {
  // state 1 = to hold sign in form data :
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    isCorrect: false,
    validationMsg: "",
    signUpIsActive: false,
    homepageIsActive: false,
    // change above one to null -- for devlopment purpose only
  });

  // state 2  = to store if signup button is clicked/active -> on that basis we will show the signup page
  // state will be used in signup.js
  const [SignUpFormData, SetSignUpFormData] = React.useState({
    mobileoremail: "",
    fullname: "",
    username: "",
    password: "",
  });

  // state 3 =  that will handle our userbase with their credentials at the time of signup
  // this state will have , array of user object ,
  // user object will have all user credentials

  const [userBase, setUserBase] = React.useState([]);

  console.log("---------------------START----------------------------");
  console.log("im SignUpFormData");
  console.log(SignUpFormData);
  console.log("im userBase");
  console.log(`User list :`);
  console.log(userBase);
  console.log(`Is homepage active: ${formData.homepageIsActive} `);
  console.log(formData.homepageIsActive);
  console.log(`
  formdata.iscorrect: ${formData.isCorrect}
  formData.signUpIsActive: ${formData.signUpIsActive}
  formData.homepageIsActive: ${formData.homepageIsActive}`);
  console.log("---------------------ENDS----------------------------");

  // functions

  // signupClickHandler : will basically add the user into userbase array using setuserbase state function
  // and once that is done , that user credentials will be saved with us.
  const signupClickHandler = () => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        signUpIsActive: !prevFormData.signUpIsActive,
        username: "",
        password: "",
      };
    });
  };

  // function will take care of signup button
  function SignupSubmitHandler(event) {
    event.preventDefault();
    // const {name, value} = event.target; //destructuring
    setUserBase((prevUserbase) => {
      return [...prevUserbase, SignUpFormData];
    });

    // making the signup input fields empty again
    SetSignUpFormData({
      mobileoremail: "",
      fullname: "",
      username: "",
      password: "",
    });
    // give alert after user signup
    alert("User has successfully signed up!");
  }

  // changeHandler : will be used to reflect the value in input box at runtime
  // and also will store the value to the state

  const changeHandler = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });

    SetSignUpFormData((prevSignUpFormData) => {
      return {
        ...prevSignUpFormData,
        [name]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // const { value } = event.target;
    //if phone no/username/ email    and password is correct
    let index = 0;
    // when userbase array is not null

    if (userBase.length > 0) {
      for (index === 0; index < userBase.length; index++) {
       
        if (
          (userBase[index].mobileoremail === formData.username ||
            userBase[index].username === formData.username) &&
          userBase[index].password === formData.password
        ) {
          console.log(
            `user found at ${userBase[index]} with correct credentials`
          );
          setFormData((prevForm) => {
            return {
              ...prevForm,
              isCorrect: true,
              homepageIsActive: true,
              validationMsg: "",
            };
          });
        } else {
          setFormData((prevForm) => {
            return {
              ...prevForm,
              isCorrect: false,
              homepageIsActive: false,
              validationMsg: "incorrect username/password",
            };
          });
        }

        //end of for loop
      }
    } else {
      alert("Account is not available with this username !!!");
    }
  };


//  ------------------------------------------firebase--------------------------------------------------




  // This is just to understand the functionality of firebase


// const submitHandler = async(event) => {
// event.preventDefault();

// const {username,password,isCorrect,validationMsg,signUpIsActive,homepageIsActive} = formData;

//   const res = await fetch(
//     "https://facemash-instagramclone-default-rtdb.firebaseio.com/facemashloginpagedata.json" , 
//   {
//      method: "POST",
//      headers: 
//      {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify({
//       username,
//       password,
//       isCorrect,
//       validationMsg,
//       signUpIsActive,
//       homepageIsActive
//     })
//   }
//   )
// }


  // development purpose
  const signoutHandler = () => {
    setFormData((prevForm) => {
      return {
        ...prevForm,
        homepageIsActive: false,
        isCorrect: false,
        username: "",
        password: "",
      };
    });
  };

  return (
    <>
      {/* passing state,changeHandler(),submitHandle() as prop */}

      {/* Below condition says : when formData.isCorrect is false , then show login page */}
      {/* once it is correct : then show homepage */}

      {/* Uncomment below */}

      {/* login page */}
      {!formData.isCorrect &&
        !formData.signUpIsActive &&
        !formData.homepageIsActive && (
          <LoginPage
            LogInFormData={formData}
            onChange={changeHandler}
            onSubmit={submitHandler}
            onClickSingUp={signupClickHandler}
          />
        )}
      {/* Home page */}

      {formData.isCorrect && formData.homepageIsActive && (
        <Homepage passState1_signoutHandle={signoutHandler} />
      )}

      {/* Singup page */}

      {formData.signUpIsActive && (
        <SignupPage
          singupformData={SignUpFormData}
          onChange={changeHandler}
          onSignUpSubmit={SignupSubmitHandler}
          onClickSingUp={signupClickHandler}
        />
      )}

      {/* for development purpose only then pls delete below */}

      {/* {formData.homepageIsActive && <Homepage passState1_signoutHandle={signoutHandler} />} */}
      {/* <SignupPage
        singupformData={SignUpFormData}
        onChange={changeHandler}
        onSignUpSubmit={SignupSubmitHandler}
        onClickSingUp={signupClickHandler}
      /> */}
    </>
  );
}

export default App;
