import { useNavigate } from "react-router-dom";
function Login() {
    const Navigate = useNavigate()
    const Gologin = ()=>{
        Navigate("/home")
    }
    return (
        <div>
            <button onClick={Gologin}>
                Start
            </button>
        </div>
    );
}

export default Login;