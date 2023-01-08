import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { QuizzQuestins } from "../Questions/Questions";
import '../App.css'


function Home() {
    const Navigate = useNavigate()
    const [number, setnumber] = useState(0)
    const [userScore, setuserScore] = useState(0)
    const [result, setResult] = useState(false)
    const [Questioncheck, setQuestioncheck] = useState(true)
    const [answershide,setanswershide] = useState(false)
 
    const next = () => {
        let btn1 = document.getElementById("btn1")
        let btn2 = document.getElementById("btn2")
        let btn3 = document.getElementById("btn3")
        let btn4 = document.getElementById("btn4")
        setnumber(number +1)
        setQuestioncheck(true)
        setanswershide(false)
        btn1.style.opacity = '1'
        btn2.style.opacity = '1'
        btn3.style.opacity = '1'
        btn4.style.opacity = '1'

    }
    const AnswerCheck = (useranser) => {
        let btn1 = document.getElementById("btn1")
        let btn2 = document.getElementById("btn2")
        let btn3 = document.getElementById("btn3")
        let btn4 = document.getElementById("btn4")
        setQuestioncheck(false)
        setanswershide(true)
        console.log(useranser)
        if (useranser == QuizzQuestins[number].correct_answer) {        
            // alert("hello")
            setuserScore(userScore + 1)
            console.log(userScore)
        }
        else {
            // alert("wrong")
        }
        if(useranser == QuizzQuestins[number].answers[0]){
            btn1.style.opacity = '1'
            btn2.style.opacity = '0.6'
            btn3.style.opacity = '0.6'
            btn4.style.opacity = '0.6'
        }
         else if(useranser == QuizzQuestins[number].answers[1]){
            btn1.style.opacity = '0.8'
            btn3.style.opacity = '0.8'
            btn4.style.opacity = '0.8'
        }
        else if(useranser == QuizzQuestins[number].answers[2]){
            btn1.style.opacity = '0.8'
            btn2.style.opacity = '0.8'
            btn4.style.opacity = '0.8'
        }
        else if(useranser == QuizzQuestins[number].answers[3]){
            btn1.style.opacity = '0.8'
            btn2.style.opacity = '0.8'
            btn3.style.opacity = '0.8'
        }
    }

    const CheckResult = () => {
        Navigate('/quizz.Result')
    }
    return (
        <div className="main">
            <div className="main-container">
                <div className="question">
                    <p>
                        {QuizzQuestins[number].question}
                    </p>
                </div>
                <div className="answers">
                    <div className="topanswers">
                        <button disabled={answershide} id="btn1" onClick={() => AnswerCheck(QuizzQuestins[number].answers[0])}>
                            {QuizzQuestins[number].answers[0]}
                        </button>
                        <button disabled={answershide} id="btn2" onClick={() => AnswerCheck(QuizzQuestins[number].answers[1])}>
                            {QuizzQuestins[number].answers[1]}
                        </button>
                    </div>
                    <div className="bottonanswers">
                        <button disabled={answershide} id="btn3" onClick={() => AnswerCheck(QuizzQuestins[number].answers[2])} >
                            {QuizzQuestins[number].answers[2]}
                        </button>
                        <button disabled={answershide} id="btn4" onClick={() => AnswerCheck(QuizzQuestins[number].answers[3])}>
                            {QuizzQuestins[number].answers[3]}
                        </button>
                    </div>
                </div>
                <div className="footer">
                    <div className="div">
                        {
                            number != 19 ?
                                <button disabled={Questioncheck} onClick={next}>next</button>
                                : <button onClick={CheckResult}>
                                    showresult
                                </button>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;