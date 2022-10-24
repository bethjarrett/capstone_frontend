import React from 'react'
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Admin from '../../components/Admin/Admin';

const Login = () => {
const [ user, setUser ] = useState({});

function DisplayImage(props) {
    return "hi";
  }
  
  function ImageFunction(props) {
    if (user.email === "bethjarrettbeth@gmail.com") {
      return <Admin />;
    } else return null };

/* get credential from google & encode JWT token */
function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
}

/* display sign out button when user has signed in */
function handleSignOut(e) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
}

useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
    client_id: "691583437703-26sd02bks59l5e9c1b8atdgfadddciqe.apps.googleusercontent.com",
    callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme: "outline", size: "large"}
    );
}, [] );

return (
    <div className='container'>
    <ImageFunction />
        <div className="pt-5 pb-5 d-flex align-items-center justify-content-center">
        <div id="signInDiv" className='text-center'></div>
        { user && 
        <div>
            <h3>{user.email}</h3>
        </div> 
        }
        { Object.keys(user).length !== 0 &&
        <button onClick={ (e) => handleSignOut(e) }>Sign Out</button> }
        </div>
    </div>
)
}

export default Login