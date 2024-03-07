import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { UserContext } from "../globalStore/user";
import { useContext } from "react";
import { jwtDecode } from "jwt-decode";

const Login = () => {

    const {addUser} = useContext(UserContext)




  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
            let data = jwtDecode(credentialResponse.credential)
        //   console.log(data);
        addUser(data)
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        
      />

      
    </>
  );
};

export default Login;
