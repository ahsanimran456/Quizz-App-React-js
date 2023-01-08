import { createContext, useState } from "react";
import { QuizzQuestins } from "../Questions/Questions";
import '../App.css'
function Home() {
    const [number, setnumber] = useState(0)
    const [userScore,setuserScore] = useState(0)
    const [result,setResult] = useState(false)
    const next = () => {
        setnumber(number + 1)
    }
    const AnswerCheck = (useranser)=>{
        console.log(useranser)
        if(useranser == QuizzQuestins[number].correct_answer){
            // alert("hello")
            setuserScore(userScore+1)
            console.log(userScore)
        }
        else{
            // alert("wrong")
        }

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
                        <button onClick={()=>AnswerCheck(QuizzQuestins[number].answers[0])}>
                            {QuizzQuestins[number].answers[0]}
                        </button>
                        <button onClick={()=>AnswerCheck(QuizzQuestins[number].answers[1])}>
                            {QuizzQuestins[number].answers[1]}
                        </button>
                    </div>
                    <div className="bottonanswers">
                        <button onClick={()=>AnswerCheck(QuizzQuestins[number].answers[2])} >
                            {QuizzQuestins[number].answers[2]}
                        </button>
                        <button onClick={()=>AnswerCheck(QuizzQuestins[number].answers[3])}>
                            {QuizzQuestins[number].answers[3]}
                        </button>
                    </div>
                </div>
                <div className="footer">
                    <div className="div">
                        {
                          number != 19 ?  
                         <button onClick={next}>next</button>
                         :<button>
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