import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";

import { UserContext } from "./globalStore/user";
import { useContext } from "react";

function App() {

  const {user} = useContext(UserContext)

  console.log(user);
  

  return (
    <>
    {
      Object.keys(user).length > 0 ? (
        
        <Home />
     
      ) : <Login />
    }
      
    </>
  );
}

export default App;
