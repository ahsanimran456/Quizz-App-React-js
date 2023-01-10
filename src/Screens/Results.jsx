import logo from '../Assest/Images/logo.png'
import './screen.css'
import { useSelector } from 'react-redux';
import { Progress, Space } from 'antd';
import { useEffect, useState } from 'react';
function QuizzResult() {
    const currnumber = useSelector((state) => state.number)
    const [percentage,setpercentage] = useState('')
    useEffect(()=>{
        const finalpercent = currnumber / 20 * 100;
        const per = Math.ceil(finalpercent)
        console.log(per)
        setpercentage(per)
        console.log(percentage)

    },[])
    
    return (
        <div className='result-wrapper'>
            <div className="center-header">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <p>Result</p>
                </div>
            </div>
            <div className="result-body">
                <div className="container">
                    <div className="result-header">
                        <h1>Quiz Result </h1>
                    </div>
                    <div className="result-main">
                        {currnumber >= 10 ?
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
                                            {currnumber}
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
                                            {currnumber}
                                        </p>
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <Progress type="circle" percent={percentage} strokeColor='red' strokeWidth='3'  />
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