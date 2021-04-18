import React, { useState, useEffect } from "react";
// import './App.css';
import firebaseConfig from "../../firebase";
import * as firebaseui from "firebaseui";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { USER_LOGIN_SUCCESS } from "../../constants/userConstants";
import { register } from '../../actions/userActions'
const LoginScreen = ({ location, history }) => {  
  // const [userInfo, setUserInfo] = useState();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  useEffect(() => {
    let data = {
      name: "",
      email: "",
      firbseUid: "",
      phoneNumber: "",
      isNewUser: false,
      token:""
    };
    console.log(userInfo);
    const fbase = firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInSuccessUrl: "/home", //This URL is used to return to that page when we got success response for phone authentication.
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: "IN",
        },
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          data.isNewUser = authResult.additionalUserInfo.isNewUser;
          // setUserInfo(data);
          if(data.isNewUser){
            dispatch(register(data))
          }
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
          });
          localStorage.setItem("userInfo", JSON.stringify(data));
          return false;
        },
      },
      // tosUrl: "https://netflix-clone-ankur.herokuapp.com/"
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
    let unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        data.name = user.displayName;
        data.email = user.email;
        data.phoneNumber = user.phoneNumber;
        data.firbseUid = user.uid;
        data.token=user.za;
        console.log("data", data);
      }
    });
    return () => {
      unregisterAuthObserver();
      console.log("on destroy");
    };
  }, []);
  return (
    <>
      <h1>REACT PHONE AUTHENTICATION</h1>
      <div id="firebaseui-auth-container"></div>
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </>
  );
};

export default LoginScreen;
