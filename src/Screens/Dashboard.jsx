import React from "react";
import { useState,useEffect } from 'react';
import Slider from "../Component/Slider";
import Cards from "../Component/Cards";
import './screen.css'
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, setDoc, doc, db ,onAuthStateChanged} from '../FirebaseConfig/Firebase'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import logo from '../Assest/Images/logo.png'
function Dashboard() {
    const navigate = useNavigate()
    useEffect(() => {
        const auth = getAuth()
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
    const StartQuizz = ()=>{
     navigate('/quizz') 

    }
    return (
        <div className="dashboard-wrapper">
            {/* <Slider state={collapsed} /> */}
            <div className="main-center">
                <div className="center-header">
                    <div>
                        {/* <button onClick={() => setCollapsed(!collapsed)}><MenuUnfoldOutlined/></button> */}
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <p>Ahxan</p>
                    </div>
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