import { quizData } from "../Utils/quizCode.jsx";
import { useState, useEffect } from "react";
import Rating from "../Components/rating.jsx";
import 'antd/dist/antd.css';
import { Progress, Tooltip } from 'antd';

const Quiz = () => {
    const [update, setUpdate] = useState(0)
    const [progress, setProgress] = useState(5)
    const [reminderAnswer, setReminderAnswer] = useState(100)
    const [show, setShow] = useState(false)
    const [result, setResult] = useState(0)
    const [wrongAnswer, setWrongAnswer] = useState(0)
    const [disable, setDisable] = useState(false)
    const [seconds, setSeconds] = useState(60)
    const [minutes, setMinutes] = useState(9)
    let timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds - 1)
            if (seconds === 0) {
                setMinutes(minutes - 1)
                setSeconds(60)
            }
        }, 1000)
        return () => clearInterval(timer)
    })
    const NextButton = () => {
        setProgress(progress + 5)
        setDisable(false)
        let btn1 = document.getElementById("btn1")
        let btn2 = document.getElementById("btn2")
        let btn3 = document.getElementById("btn3")
        let btn4 = document.getElementById("btn4")
        btn1.style.opacity = '1'
        btn2.style.opacity = '1'
        btn3.style.opacity = '1'
        btn4.style.opacity = '1'
        setUpdate(update + 1)
    }
    const ShowResult = () => {
        setShow(true)
    }
    const name = localStorage.getItem("name")
    const WrongAnswer = (e) => {
        let btn1 = document.getElementById("btn1")
        let btn2 = document.getElementById("btn2")
        let btn3 = document.getElementById("btn3")
        let btn4 = document.getElementById("btn4")
        setDisable(true)
        if (e === quizData[update].incorrect_answers[0]) {
            setWrongAnswer(wrongAnswer + 5)
            setReminderAnswer(reminderAnswer - 5)
            btn2.style.opacity = '0.3'
            btn3.style.opacity = '0.3'
            btn4.style.opacity = '0.3'
        }
        else if (e === quizData[update].incorrect_answers[1]) {
            setWrongAnswer(wrongAnswer + 5)
            setReminderAnswer(reminderAnswer - 5)
            btn1.style.opacity = '0.3'
            btn3.style.opacity = '0.3'
            btn4.style.opacity = '0.3'
        } else if (e === quizData[update].incorrect_answers[2]) {
            setWrongAnswer(wrongAnswer + 5)
            setReminderAnswer(reminderAnswer - 5)
            btn1.style.opacity = '0.3'
            btn2.style.opacity = '0.3'
            btn4.style.opacity = '0.3'
        } else if (e === quizData[update].incorrect_answers[3]) {
            setResult(result + 5)
            btn1.style.opacity = '0.3'
            btn2.style.opacity = '0.3'
            btn3.style.opacity = '0.3'
        }
    }
    return (
        <div className="quiz_main_div">{
            show === false && minutes !== 0 ?
                <>
                    <div className="progressBarr_div">
                        <Progress strokeLinecap="butt" percent={progress} />
                    </div>
                    <center>
                        <div className="container">
                            <div className="inner_div">
                                <br />
                                <h1 className="heading">Question {update + 1} of 20</h1>
                                <Rating />
                                <h1>0{minutes}:{seconds}</h1>
                                <p className="title">{quizData[update].category}</p>
                                <p>Q : {quizData[update].question}</p>
                            </div>
                            <div>
                                <button id="btn1" disabled={disable} onClick={() => WrongAnswer(quizData[update].incorrect_answers[0])} className="btn">{quizData[update].incorrect_answers[0]}</button>
                                <button id="btn2" disabled={disable} onClick={() => WrongAnswer(quizData[update].incorrect_answers[1])} className="btn">{(quizData[update].incorrect_answers[1])}</button>
                            </div>
                            <div>
                                <button id="btn3" disabled={disable} onClick={() => WrongAnswer(quizData[update].incorrect_answers[2])} className="btn">{quizData[update].incorrect_answers[2]}</button>
                                <button id="btn4" disabled={disable} onClick={() => WrongAnswer(quizData[update].incorrect_answers[3])} className="btn">{quizData[update].incorrect_answers[3]}</button>
                            </div>
                            <div>
                                {
                                    update === 19 || disable === false ?
                                        <button style={{ display: 'none' }} className="Next_btn">Next</button>
                                        :
                                        <button className="Next_btn" onClick={NextButton}>Next</button>
                                }
                                {
                                    update !== 19 ?
                                        null
                                        :
                                        <button className="Next_btn" onClick={ShowResult}>Check Your Result</button>
                                }
                            </div>
                        </div>
                    </center>
                    <div className="progressBar_div">
                        <Tooltip>
                            <Progress strokeColor={'red'} percent={wrongAnswer} success={{ percent: result }} />
                        </Tooltip>
                    </div>
                    <div className="progressBar_div">
                        <Tooltip>
                            <Progress strokeColor={'rgb(82 196 26)'} percent={reminderAnswer} success={{ percent: wrongAnswer }} />
                        </Tooltip>
                    </div>
                </>
                :
                <div className="result_container">
                    <div className="result_inner_div">
                        <h1 className="result_heading">{name} Your Result</h1>
                        <div className="progressBarrr_div">
                            <Tooltip title="Your Prcentage">
                                <Progress strokeColor={'red'} percent={wrongAnswer} success={{ percent: result }} type="circle" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
        }
        </div>
    )
}
export default Quiz