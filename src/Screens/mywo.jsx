import React, { useEffect, useState } from "react";
import './screen.css'
import { getAuth, createUserWithEmailAndPassword, setDoc, doc, db, onAuthStateChanged,signInWithEmailAndPassword } from '../FirebaseConfig/Firebase'
import { async } from "@firebase/util";
import { BallTriangle } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Setname } from '../States/Reducers/index'


function Mywork() {

    const navigate = useNavigate()
    const [login, Setlogin] = useState(true)
    const [UserName, SetuserName] = useState("")
    const [Email, SetEmail] = useState("")
    const [Password, SetPassword] = useState('')
    const [User, SetUser] = useState(false)
    const [loader, setloader] = useState(false)
    const dispatch = useDispatch()
    const Gologin = () => {
        Setlogin(true)
    }

    const GoSignup = () => {
        Setlogin(false)
    }
    useEffect(()=>{
        SetEmail("");
        SetPassword("");
        SetuserName("")
    },[login])

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user", user);
                navigate('/dashboard')
            } else {
                console.log("no user found");

            }
        });
    }, [])
    const signUp = () => {
        const auth = getAuth();
        let usernametest = /^[A-Za-z .]{3,20}$/
        let emailtest = /^([\w]*[\w\.]*(?!\.)@gmail.com)/
        let passwordtest = /^[a-zA-Z0-9]{6,16}$/;
        if ((usernametest.test(UserName)) && (emailtest.test(Email)) && (passwordtest.test(Password))) {
            localStorage.setItem("UserName", UserName)
            dispatch(Setname(UserName))
            setloader(true)
            createUserWithEmailAndPassword(auth, Email, Password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    toast.success(`Welcome Dear ${UserName} !`, { autoClose: 2000, })
                    console.log(user)
                    await setDoc(doc(db, "users", user.uid), {
                        name: UserName,
                        email: Email,
                        // password:Password,
                        userUid: user.uid
                    })

                    SetuserName("");
                    SetEmail("");
                    SetPassword("");
                    setloader(false)

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(`${errorMessage} !`, { autoClose: 3000, })
                    setloader(false)
                    // ..
                })
        }
        else if (!usernametest.test(UserName)) {
            toast.warning(`PLEASE INPUT CORRECT UserName !`, { autoClose: 2000, })
        }
        else if (!emailtest.test(Email)) {
            toast.warning(`PLEASE INPUT CORRECT Email !`, { autoClose: 2000, })
        }
        else if (!passwordtest.test(Password)) {
            toast.warning(`PASSWORD SHOULD BE AT LEAST 6 CHARACTERS!`, { autoClose: 2000, })
        }
    }

    const LoginUser = () => {
        const auth = getAuth();
        let emailtest = /^([\w]*[\w\.]*(?!\.)@gmail.com)/
        let passwordtest = /^[a-zA-Z0-9]{6,16}$/;
        if ((emailtest.test(Email)) && (passwordtest.test(Password))) {
            setloader(true)
            signInWithEmailAndPassword(auth, Email,Password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setloader(false)
                    SetEmail(" ");
                    SetPassword(" ");
                    console.log(user)
    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setloader(false)
                    toast.error(`${errorMessage} !`, { autoClose: 3000, })
                    console.log("login error", errorMessage)
                });
        }
        
        else if (!emailtest.test(Email)) {
            toast.warning(`PLEASE INPUT CORRECT Email !`, { autoClose: 2000, })
        }
        else if (!passwordtest.test(Password)) {
            toast.warning(`PASSWORD SHOULD BE AT LEAST 6 CHARACTERS!`, { autoClose: 2000, })
        }
    }
    return (

        // Login ....................................................>>>>>>

        <div className="Login-main">
            <ToastContainer />
            <div className="login-box">
                {login ?
                    <div className="inputs-box">
                        <div className="inputs-wrapper">
                            <input value={Email} type="text" placeholder="Email" onChange={(e) => SetEmail(e.target.value)} />
                        </div>
                        <div className="inputs-wrapper">
                            <input value={Password} type="password" placeholder="Password" onChange={(e) => SetPassword(e.target.value)} />
                        </div>
                        {loader ?
                            <BallTriangle
                                height={50}
                                width={100}
                                radius={5}
                                color="#6971af"
                                ariaLabel="ball-triangle-loading"
                                wrapperClass={{}}
                                wrapperStyle=""
                                visible={true}
                            />:
                        <div className="btns">
                            <button onClick={LoginUser} >Login</button>
                        </div>}
                        <div className="an-account">
                            <p style={{ cursor: 'pointer', marginTop: '20px' }}>
                                Don't have an account? <span onClick={GoSignup} style={{ color: '#18B5F9' }}> Sign up </span>
                            </p>
                        </div>
                    </div>
                    :
                    // sign up ...................................///////////////////

                    <div className="inputs-box">
                        <div className="inputs-wrapper">
                            <input value={UserName} type="text" placeholder="Name" onChange={(e) => SetuserName(e.target.value)} />
                        </div>
                        <div className="inputs-wrapper">
                            <input value={Email} type="email" placeholder="Email" onChange={(e) => SetEmail(e.target.value)} />
                        </div>
                        <div className="inputs-wrapper">
                            <input value={Password} type="password" placeholder="Password" onChange={(e) => SetPassword(e.target.value)} />
                        </div>
                        {loader ?
                            <BallTriangle
                                height={50}
                                width={100}
                                radius={5}
                                color="#6971af"
                                ariaLabel="ball-triangle-loading"
                                wrapperClass={{}}
                                wrapperStyle=""
                                visible={true}
                            /> : <div className="btns">
                                <button onClick={signUp}> Sign up </button>
                                <div className="an-account">
                                    <p style={{ cursor: 'pointer', marginTop: '20px' }}>
                                        Have an account? <span style={{ color: '#18B5F9' }} onClick={Gologin}>  Log in</span>
                                    </p>
                                </div>
                            </div>
                        }

                    </div>
                }

            </div>
        </div>
    );
}

export default Mywork;