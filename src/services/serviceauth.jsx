import { baseurl } from "./urls"
import axios from 'axios'

export function LogIn(logindata) {
    console.log(logindata);
    return (
        axios.post(baseurl + '/shop/api/token/',JSON.stringify(logindata), {
            
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => { res.data })
    )
}