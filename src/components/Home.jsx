import React from 'react'
import { UserContext } from '../globalStore/user';
import { useContext } from 'react';

const Home = ({data}) => {

    const {user} = useContext(UserContext)
    const {deleteUser} = useContext(UserContext)

    const handleSignOut = ()=> {
        deleteUser()
    }

  return (
    <>
    <h1>welcome to Homepage - {user.name} </h1>
    <img src={user.picture} alt="" />

    <button onClick={handleSignOut}>Sign out</button>
    </>
  )
}

export default Home;