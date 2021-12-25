import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    //create user of the help registation form
    const registerUser = (email, password, name, navigate, location) => {
        setIsLoading(true)
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

                //rediect send right place
                const uri = location?.state?.from || '/home';
                navigate(uri)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    //login user
    const loginUser = (email, password, navigate, location) => {
        setIsLoading(true)
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

                //rediect send right place
                const uri = location?.state?.from || '/home';
                navigate(uri)
            })
            .catch((err) => {
                setError(err.message)
            }).finally(() => {
                setIsLoading(false)
            })
    }

    //google login 
    const googleLogin = (navigate, location) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)

                setError('')
                swal({
                    title: "Good Job!",
                    text: "Successfully Login",
                    icon: "success",
                    button: "Ok",
                })
                //send data to mongoDb
                saveToDb(result.user.email, result.user.displayName)


                //rediect send right place
                const uri = location?.state?.from || '/home';
                navigate(uri)

            })
            .catch(err => setError(err.message))
            .finally(() => {
                setIsLoading(false)
            })
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
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [])


    //check admin role
    useEffect(() => {
        fetch(`https://whispering-sands-36256.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    //save to db
    const saveToDb = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://whispering-sands-36256.herokuapp.com/users', {
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
        isLoading,
        admin,
        googleLogin,
        logOut,
        loginUser,
        registerUser,

    }
}

export default useFirebase;