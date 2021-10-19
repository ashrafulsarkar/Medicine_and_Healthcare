import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import inisializeAthentication from "../components/pages/Login/Firebase/firebase.init";

inisializeAthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    /**
     * sign in usign google
     */
    const signusingGoogle = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
            setError('');
        }).catch((error) => {
            setError(error.message);
        }).finally(()=> setIsLoading(false));
    }

    /**
     * sign in using facebook
     */
    const signusingFacebook = () => {
        setIsLoading(true);
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
            setError('');
        }).catch((error) => {
            setError(error.message);
        }).finally(()=> setIsLoading(false));
    }

    /**
     * createUser 
     */
    const createUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        }).finally(()=> setIsLoading(false));
    }

    /**
     * userLogin 
     */
    const userLogin = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        }).finally(()=> setIsLoading(false));
    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[])

    /**
     * logout system
     */
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        // Sign-out successful.
        }).finally(()=> setIsLoading(false));
    }

    return {
        user,
        error,
        signusingGoogle,
        logOut,
        signusingFacebook,
        error,
        isLoading,
        createUser,
        userLogin
    }
}

export default useFirebase;