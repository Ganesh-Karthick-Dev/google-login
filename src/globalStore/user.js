import { createContext, useState } from "react";


export const UserContext = createContext();



const UserContextProvider = (props)=> {

    const [user,setUser] = useState({});

    const addUser = (data)=> {
        setUser(data)
    }

    const deleteUser = (data)=> {
        setUser({})
    }

    return (

        <UserContext.Provider value={{ user, addUser , deleteUser}}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserContextProvider ;