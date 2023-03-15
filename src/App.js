import React,{useState} from 'react';
import Account from './Pages/Account';
import Homepage from './Pages/Homepage';
import Signin from './Pages/Signin';
import { Route, Routes} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';
function App() {


  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/account' element={<Protected><Account/></Protected>}/>
      </Routes>
    </AuthContextProvider>
    
)  
}
export default App;
