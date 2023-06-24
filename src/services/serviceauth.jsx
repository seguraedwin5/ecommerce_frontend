import { baseurl } from "./urls"

export function LogIn(logindata) {
    console.log(logindata);
    return (
        fetch(baseurl + '/shop/api/token/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(logindata)
        }).then((data) => { data.json() })
    )
}