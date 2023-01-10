import React, { useEffect, useState } from "react";
import './screen.css'
import { getAuth, createUserWithEmailAndPassword, setDoc, doc, db ,onAuthStateChanged} from '../FirebaseConfig/Firebase'
import { async } from "@firebase/util";
import { BallTriangle } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate()
    const [login, Setlogin] = useState(true)
    const [UserName, SetuserName] = useState("")
    const [Email, SetEmail] = useState("")
    const [Password, SetPassword] = useState('')
    const [User, SetUser] = useState(false)
    const [loader, setloader] = useState(false)
    const Gologin = () => {
        Setlogin(true)
    }

    const GoSignup = () => {
        Setlogin(false)
    }

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
            setloader(true)
            createUserWithEmailAndPassword(auth, Email, Password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                     toast.success(`Welcome Dear ${UserName} !`,{autoClose: 2000,})
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
                    toast.error(`${errorMessage} !`,{autoClose: 3000,})
                    setloader(false)
                    // ..
                })
        }
        else if(!usernametest.test(UserName)) {
            toast.warning(`PLEASE INPUT CORRECT UserName !`,{autoClose: 2000,})
        }
        else if(!emailtest.test(Email)) {
            toast.warning(`PLEASE INPUT CORRECT Email !`,{autoClose: 2000,})
        }
        else if(!passwordtest.test(Password) ) {
            toast.warning(`PASSWORD SHOULD BE AT LEAST 6 CHARACTERS!`,{autoClose: 2000,})
        }
    }
    return (
        <div className="Login-main">
            <ToastContainer />
            <div className="login-box">
                {User ?
                    <div className="inputs-box">
                        <div className="inputs-wrapper">
                            {/* <p>User Email</p> */}
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="inputs-wrapper">
                            {/* <p>Password</p> */}
                            <input type="text" placeholder="Password" />
                        </div>
                        <div className="btns">
                            <button onClick={GoSignup}>Login</button>
                        </div>
                    </div>
                    :

                    <div className="inputs-box">
                        <div className="inputs-wrapper">
                            {/* <p>UserName</p> */}
                            <input value={UserName} type="text" placeholder="Name" onChange={(e) => SetuserName(e.target.value)} />
                        </div>
                        <div className="inputs-wrapper">
                            {/* <p>User Email</p> */}
                            <input value={Email} type="email" placeholder="Email" onChange={(e) => SetEmail(e.target.value)} />
                        </div>
                        <div className="inputs-wrapper">
                            {/* <p>Password </p> */}
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
                                <button onClick={signUp}>Sign up </button>
                            </div>
                        }

                    </div>
                }

            </div>
        </div>
    );
}

export default Login;