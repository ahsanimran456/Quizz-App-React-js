import React from "react";
import { useState, useEffect } from 'react';
import Slider from "../Component/Slider";
import Cards from "../Component/Cards";
import './screen.css'
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, setDoc, doc, db, onAuthStateChanged ,signOut} from '../FirebaseConfig/Firebase'

import logo from '../Assest/Images/logo.png'
import { useSelector } from "react-redux";
import { LogoutOutlined } from '@ant-design/icons'

function Dashboard() {
    const loginUserName = useSelector((state) => state.Setname)
    const [username, setUsername] = useState("")
    const [Logout, SetLogout] = useState(false)

    const navigate = useNavigate()
    useEffect(() => {
        const auth = getAuth()
        setUsername(loginUserName)

        onAuthStateChanged(auth, (user) => {
            if (!user) {
                console.log("user", user);
                navigate('/')
            } else {
                console.log("user", user);
            }
        });
    }, [])
    const [collapsed, setCollapsed] = useState(false);

    const StartQuizz = () => {
        navigate('/quizz')

    }

    const logOut = () => {
        const auth = getAuth()
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });
    }

    const OpenModal = () => {
        SetLogout(!Logout)
    }
    return (
        <div className="dashboard-wrapper">
            {/* <Slider state={collapsed} /> */}
            <div className="main-center">
                <div className="center-header">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <p>{localStorage.getItem("UserName")}<span onClick={OpenModal} style={{ cursor: 'pointer' }}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg></span></p>
                    </div>
                    {
                        Logout &&
                        <div className='logout'>
                            <div onClick={logOut}>
                                <LogoutOutlined /> <span>Logout</span>
                            </div>
                        </div>
                    }
                </div>
                <div className="container cards-container">
                    <div className="row">
                        <div className="col-md-4">
                            <Cards title={'Web And Mobile Hybrid App Develpment '} subjects={1} StartQuizz={StartQuizz} />
                        </div>
                        <div className="col-md-4">
                            <Cards title={'TypeScript '} subjects={0} />
                        </div>
                        <div className="col-md-4">
                            <Cards title={'CCO'} subjects={0} />
                        </div>
                        <div className="col-md-4">
                            <Cards title={'Module-1 Exam'} subjects={0} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default Dashboard;