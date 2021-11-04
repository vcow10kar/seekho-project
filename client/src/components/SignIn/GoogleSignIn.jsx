import axios from "axios";
import {GoogleButton} from './SignInWrappers';
import { useEffect, useState } from 'react';

const init = {
    token: "",
    userBookList: "",
    readingList: ""
}
export default function GoogleSignIn() {

    const [user, setUser] = useState(init);
    useEffect (() => {
        localStorage.setItem('token', "");
        localStorage.setItem('userBookList', "");
        localStorage.setItem('readingList', "");
    }, [user]);

    function goToGoogle() {
        let timer = null;

        const googleLoginURL = 'http://localhost:5000/auth/google';
        const newWindow = window.open(
            googleLoginURL,
            '_self',
            'width = 411'
        );

        const fetchUser = () => {
            axios
            .get("http://localhost:5000/getuser", {withCredentials: true})
            .then(res => {
                console.log(res);
                console.log("Received a response:", res.data);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userBookList', res.data.userBookList);
                localStorage.setItem('readingList', res.data.readingList);
                window.location.pathname = '/home';
            })
            .catch(err => {
                console.log("Not properly authenticated!");
                console.log("Error", err);
            })

            //newWindow.close();
        }
        if(newWindow) {
            timer = setInterval(() => {
                fetchUser();
                console.log('Authenticated!');
                //fetchUser();
                if(timer) {
                    clearInterval(timer);
                }
            }, 500);
        }

        
    }

    //function fetchUser() {
        
    // }

    // async function goToGoogle() {
    //    axios({
    //     method: 'get',
    //     url: 'http://localhost:5000/auth/google',
    //     headers: {
    //         "Access-Control-Allow-Origin": "*"
    //     }
    // })
    // .then(res => {
    //     console.log("Response:", res);
    // })
    // .catch(err => {
    //     console.log("Error:", err);
    // })
    // }


    return (
        <GoogleButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, pt:2, pb:2, color: 'black', fontSize: '14px'}}
                onClick = {() => goToGoogle()}
            ><span style = {{marginRight: 35, marginTop: 'auto', width: '22px', height: '22px'}}><img style = {{width: '22px', height: '22px'}} src = "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt = "access google"/></span>
               CONTINUE WITH GOOGLE
            </GoogleButton  >
    )
}