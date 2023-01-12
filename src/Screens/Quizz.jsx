import { getAuth, createUserWithEmailAndPassword, setDoc, doc, db, onAuthStateChanged } from '../FirebaseConfig/Firebase'
import { useNavigate } from "react-router-dom";
import { useState, useEffect, createContext } from 'react';
import logo from '../Assest/Images/logo.png'
import './screen.css'
import { QuizzQuestins } from '../Questions/Questions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {Inc} from '../States/Reducers/index'

function Quizz() {
    const navigate = useNavigate()
    const [number, setnumber] = useState(0)
    const [nextbtn, Setnextbtn] = useState(true)
    const [score ,setScore] =useState(0)
    const [answerdisable, setanswerdisable] = useState(false)
    const [questionnumber, setquestionnumber] = useState(1)
    // redux 
    const currnumber = useSelector((state)=> state.number)
    const dispatch = useDispatch()
    const Next = () => {
        let btn1 = document.getElementById("btn1")
        let btn2 = document.getElementById("btn2")
        let btn3 = document.getElementById("btn3")
        let btn4 = document.getElementById("btn4")
        setquestionnumber(questionnumber + 1)
        setnumber(number + 1)
        Setnextbtn(true)
        setanswerdisable(false)
        btn1.style.opacity = '1'
        btn2.style.opacity = '1'
        btn3.style.opacity = '1'
        btn4.style.opacity = '1'

    }
    const Result = () => {
        navigate('/Quizz.Result')
        localStorage.setItem("Score",score)
    }

    const CheckQuestion = (useranswer) => {
        let btn1 = document.getElementById("btn1")
        let btn2 = document.getElementById("btn2")
        let btn3 = document.getElementById("btn3")
        let btn4 = document.getElementById("btn4")
        Setnextbtn(false)
        setanswerdisable(true)
        if (useranswer == QuizzQuestins[number].correct_answer) {
            dispatch(Inc())
            setScore(score +1 )
        }

        if (useranswer == (QuizzQuestins[number].answers[0])) {
            btn1.style.opacity = '1'
            btn2.style.opacity = '0.3'
            btn3.style.opacity = '0.3'
            btn4.style.opacity = '0.3'

        }
        else if (useranswer == (QuizzQuestins[number].answers[1])) {
            btn1.style.opacity = '0.3'
            btn3.style.opacity = '0.3'
            btn4.style.opacity = '0.3'
        }
        else if (useranswer == (QuizzQuestins[number].answers[2])) {
            btn1.style.opacity = '0.3'
            btn2.style.opacity = '0.3'
            btn4.style.opacity = '0.3'

        }
        else if (useranswer == (QuizzQuestins[number].answers[3])) {
            btn1.style.opacity = '0.3'
            btn2.style.opacity = '0.3'
            btn3.style.opacity = '0.3'
        }
    }
    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user", user);
            } else {
                navigate('/')

            }
        });
    }, [])
    return (
        
            <div className='main-quizz-wrapper'>
                <div className="center-header">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <p className='text-uppercase'>{localStorage.getItem('UserName')}</p>
                    </div>
                </div>

                <div className="quizz-portion">
                    <div className="container container-quizz">

                        <div className="quizz-wrapp">
                            <div className="quizz-header">
                                <div>
                                    MCQ's
                                </div>
                                <div>
                                    ( {questionnumber} of 20)
                                </div>
                            </div>
                            <div className="quizz-body">
                                <div className="question">
                                    <h3>Q. </h3>
                                    <p>{QuizzQuestins[number].question}</p>
                                </div>
                                <div className="answers-btns">
                                    <div className='uper'>
                                        <div>
                                            <span></span> <button id='btn1' disabled={answerdisable} className="button-80" role="button" onClick={() => CheckQuestion(QuizzQuestins[number].answers[0])}> {QuizzQuestins[number].answers[0]}</button>
                                        </div>
                                        <div>
                                            <span></span> <button id='btn2' disabled={answerdisable} className="button-80" role="button" onClick={() => CheckQuestion(QuizzQuestins[number].answers[1])}> {QuizzQuestins[number].answers[1]}</button>
                                        </div>
                                    </div>
                                    <div className='bottom'>
                                        <div>
                                            <span></span>  <button id='btn3' disabled={answerdisable} className="button-80" role="button" onClick={() => CheckQuestion(QuizzQuestins[number].answers[2])}> {QuizzQuestins[number].answers[2]}</button>
                                        </div>
                                        <div>
                                            <span></span>  <button id='btn4' disabled={answerdisable} className="button-80" role="button" onClick={() => CheckQuestion(QuizzQuestins[number].answers[3])} >{QuizzQuestins[number].answers[3]}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    {
                                        number != 19 ?
                                            <div>
                                                <button disabled={nextbtn} className="button-68" role="button" onClick={Next}>Next</button>
                                            </div> :
                                            <div>
                                                <button disabled={nextbtn} className="button-68" role="button" onClick={Result}>Result</button>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Quizz;