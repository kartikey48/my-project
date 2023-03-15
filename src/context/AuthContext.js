import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { 
    onAuthStateChanged, 
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut
} from "firebase/auth";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(currentUser);
    });

    return () => {
      unsub();
    };
  }, [currentUser]);

  const googleSignIn = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider);
  }

  const logOut = ()=>{
    signOut(auth);
  }
  return (
    <AuthContext.Provider value={{ googleSignIn,logOut,currentUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
    return useContext(AuthContext);
}