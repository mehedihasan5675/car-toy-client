import React, { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../__firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
    const authInfo={
        name:'mehedi',
        createUser
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