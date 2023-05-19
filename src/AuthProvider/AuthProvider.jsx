import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { createContext, useState } from 'react';
import app from '../__firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const providerGoogle=new GoogleAuthProvider()
const [loading,setLoading]=useState(true)
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const logIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const GoogleLogIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,providerGoogle)
}
    const authInfo={
        loading,
        logIn,
        createUser,
        GoogleLogIn

    }
    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;