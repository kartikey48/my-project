import React from 'react'
import { UserAuth } from '../context/AuthContext'
const Account = () => {
    const {logOut , currentUser} = UserAuth();
    console.log(currentUser);
    const handleSignOut = async()=>{
        try{
            await logOut();
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div>
        <h1>Hello {currentUser?.displayName}</h1>
        <button onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default Account