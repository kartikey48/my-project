import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Protected = ({children}) => {
    const {currentUser} = UserAuth();
    const navigate = useNavigate();
    if(!currentUser){
        navigate('/signin');
    }
  return children;

}

export default Protected