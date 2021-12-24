import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    //create user of the help registation form
    const registerUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const newUser = { email, displayName: name };
                setUser(newUser)
                setError('');

                //update on firebase 
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        setError('')
                    })
                    .catch(err => {
                        setError(err.message)
                    })
                //confirm message for user
                swal({
                    title: "Wow!",
                    text: "Successfully Register",
                    icon: "success",
                    button: "Ok",
                })
            })
            .catch(err => {
                setError(err.message)
            })
    }

    //login user
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                setError('')
                swal({
                    title: "Good Job!",
                    text: "Successfully Login",
                    icon: "success",
                    button: "Ok",
                })
            })
            .catch((err) => {
                setError(err.message)
            });
    }
    //user log out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                swal({
                    title: "Opps!",
                    text: "Successfully logout",
                    icon: "success",
                    button: "Ok",
                })
                setUser({})
            })
    }


    //user Tracking
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        return () => unsubscribe;
    }, [])


    return {
        user,
        error,
        logOut,
        loginUser,
        registerUser,

    }
}

export default useFirebase;