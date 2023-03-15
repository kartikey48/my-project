import React, { useEffect, useState } from 'react';
import { GoogleButton } from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import {auth} from "../firebase"
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from 'firebase/auth';

const Signin = () => {
  const navigate = useNavigate();
  const { googleSignIn, currentUser } = UserAuth();
  const [isSignInComplete, setIsSignInComplete] = useState(false);

  // const setUpReCaptcha = ()=>{

  //     window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
  //     'size': 'invisible',
  //     'callback': (response) => {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //       this.onSignInSubmit();
  //     }
  //   }, auth);

  // }
  // const onSignInSubmit = (event)=>{
  //   event.preventDefault();
  //     const phoneNumber = '+91 6399471961';
  //     const appVerifier = window.recaptchaVerifier;

  //     const auth = getAuth();
  //     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  //         .then((confirmationResult) => {
  //           // SMS sent. Prompt user to type the code from the message, then sign the
  //           // user in with confirmationResult.confirm(code).
  //           window.confirmationResult = confirmationResult;
  //           // ...
  //         }).catch((error) => {
  //           // Error; SMS not sent
  //           // ...
  //         });
  //       }

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      setIsSignInComplete(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isSignInComplete && currentUser != null) {
      navigate('/account');
    }
  }, [navigate, currentUser, isSignInComplete]);

  return (
    <div>
      <GoogleButton onClick={handleSignIn} />
      <button>Sigin with phone number</button>
      <div id="recaptchaDiv">

      </div>
    </div>
  );
};

export default Signin;
