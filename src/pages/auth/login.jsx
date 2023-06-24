import { useState } from "react";
import { LogIn } from "@/services/serviceauth";


function Login() {
    const [ UserState , SetUserState] = useState("")
    const [ PasswordState , SetPasswordState] = useState("")
    function HandleSubmit(e){
        e.preventDefault();
        let data = {
            username : UserState,
            password : PasswordState
        };
        LogIn(data).then( (res) => {
            console.log(res)
            SetUserState('');
            SetPasswordState('');
            console.log(res)
        })
    }

    
    
    return ( 
        <div>
            <h1>Login</h1>
            <form method="POST" onSubmit={HandleSubmit}>
                <label htmlFor="user">User</label>
                <input type="text" id="user" onChange={(e)=>{  SetUserState(e.target.value)}} value={UserState}/>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" onChange={(e)=>{  SetPasswordState(e.target.value)}} value={PasswordState}/>
                <button className="btn btn-primary" type="submit">Log In</button>
            </form>
        </div>
     );
}

export default Login;