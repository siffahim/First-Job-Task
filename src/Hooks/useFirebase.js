import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const [admin, setAdmin] = useState(false)

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

                //send data to mongoDb
                saveToDb(email, name)

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


    //check admin role
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    //save to db
    const saveToDb = (email, displayName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(() => {

        })
    }

    return {
        user,
        error,
        admin,
        logOut,
        loginUser,
        registerUser,

    }
}

export default useFirebase;