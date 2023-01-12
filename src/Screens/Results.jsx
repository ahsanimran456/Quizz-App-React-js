import logo from '../Assest/Images/logo.png'
import './screen.css'
import { useSelector } from 'react-redux';
import { Progress, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, setDoc, doc, db, onAuthStateChanged, signOut } from '../FirebaseConfig/Firebase'
import { ToastContainer, toast } from 'react-toastify';
import { LogoutOutlined } from '@ant-design/icons'
function QuizzResult() {
    const navigate = useNavigate()

    // const currnumber = useSelector((state) => state.number)  // redux comment becz localStorage sy data lay raha 
    const Curentnumber = localStorage.getItem("Score")
    const [Logout, SetLogout] = useState(false)
    const [percentage, setpercentage] = useState('')
    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("user", user);
            } else {
                navigate('/')

            }
        });
    }, [])

    useEffect(() => {
        const finalpercent = Curentnumber / 20 * 100;
        const per = Math.ceil(finalpercent)
        // console.log(per)
        setpercentage(per)
        // Curentnumber >= 10 ? toast.success('Congratulations, you passed', { autoClose: 2000, }) : toast.error(`You are Failed`, { autoClose: 2000, })
    }, [])

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
 const GotoHome =()=>{
    navigate('/dashboard')
 }
    return (
        <div className='result-wrapper'>
            <ToastContainer />
            <div className="center-header">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='header-logout'>
                    <p>{localStorage.getItem("UserName")} <span onClick={OpenModal} style={{ cursor: 'pointer' }}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg></span></p>
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
            <div className="result-body">
                <div className="container">
                    <div className="result-header">
                        <h1>Quiz Result </h1>
                    </div>
                    <div className="result-main">
                        {Curentnumber >= 10 ?
                            <div className="passed">
                                <div className="desig">
                                    <h1>Congratulations, you passed</h1>
                                </div>
                                <div className="totalquestion">
                                    <div>
                                        <p>
                                            Total Questions
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            20
                                        </p>
                                    </div>
                                </div>
                                <div className="totalquestion">
                                    <div>
                                        <p>
                                            Correct Questions
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            {Curentnumber}
                                        </p>
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <Progress type="circle" percent={percentage} strokeColor='green' strokeWidth='3' />
                                </div>
                            </div>
                            :
                            <div className="failed">
                                <div className="desig">
                                    <h1>you are Failed</h1>
                                </div>
                                <div className="totalquestion">
                                    <div>
                                        <p>
                                            Total Questions
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            20
                                        </p>
                                    </div>
                                </div>
                                <div className="totalquestion">
                                    <div>
                                        <p>
                                            Correct Questions
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            {Curentnumber}
                                        </p>
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <Progress type="circle" percent={percentage} strokeColor='red' strokeWidth='3' />
                                </div>
                                <div className='btn-result'>
                                    <button className="button-80" role="button" onClick={GotoHome} > Back to home </button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizzResult;