import React from 'react';
// import {getAuth} from "firebase/auth";
// import app from '../firebase/firebase.config';
import { createContext } from 'react';




export const AuthContext = createContext(null);
// const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user = null;

    const authInfo = {
        user,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;