import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    
    const createNewUser = (email,password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userLogin = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle = () =>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
      }
     
    const logOut = () =>{
        setLoader(true)
        return signOut(auth);
    }


    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loader,
        signInWithGoogle
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
             setUser(currentUser)
             setLoader(false);
        });
        return () => {
            unsubscribe();
        }
    },[])



    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;