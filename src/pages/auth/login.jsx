import { useState } from "react";
import { LogIn } from "@/services/serviceauth";
import { Button, Form } from "react-bootstrap";


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
        <div className="p-3">
            <h1>Login</h1>
            <Form method="POST" onSubmit={HandleSubmit} >
                <Form.Group>
                    <Form.Label htmlFor="user" >User</Form.Label>
                    <Form.Control type="text" id="user" onChange={(e)=>{  SetUserState(e.target.value)}} value={UserState}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control type="text" id="password" onChange={(e)=>{  SetPasswordState(e.target.value)}} value={PasswordState}/>
                    <Button variant="success" type="submit" className="mt-3"> Log In</Button>
                </Form.Group>
                
                
                
                
                
            </Form>
        </div>
     );
}

export default Login;