import {getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/firebase.init";

firebaseInitialize();

const googleProvider=new GoogleAuthProvider();
const auth=getAuth();
const useFirebase=()=>{

    const [loading,setLoading]=useState(true)
    const [user, setUser]=useState({});
    const googleSignUp=()=>{
        return signInWithPopup(auth, googleProvider)
        .then(result=>{
            console.log(result.user) 
        })
        .catch((error)=>console.log(error))
        .finally(() => { setLoading(false) }); 
    }
    const googleSignOut=()=>{
        setLoading(true);
        signOut(auth)
        .then(()=>setUser({}))
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
        })
    },[])
    

    return {
        loading,
        user,
        setUser,
        googleSignUp,
        googleSignOut
    }
}

export default useFirebase;