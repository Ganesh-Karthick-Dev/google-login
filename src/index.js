import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserContextProvider from "./globalStore/user";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <UserContextProvider>
    <GoogleOAuthProvider clientId="656134140742-tkcj2fm9ponomc86orr6o2hpjukltutv.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    </UserContextProvider>
   
  
);


