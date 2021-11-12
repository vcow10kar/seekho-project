import axios from "axios";
import {GoogleButton} from './SignInWrappers';
import { useState } from 'react';

const init = {
    token: "",
    userBookList: "",
    readingList: ""
}
export default function GoogleSignIn() {

    // const [user, setUser] = useState(init);

    function goToGoogle() {
        //let timer = null;

        localStorage.setItem('googleLogin', true);

        const googleLoginURL = 'http://localhost:5000/auth/google';
        const newWindow = window.open(
            googleLoginURL,
            '_self',
            'width = 411'
        );

        // const fetchUser = () => {
        //     axios
        //     .get("http://localhost:5000/getuser", {withCredentials: true})
        //     .then(res => {

        //         console.log(res.data);

        //         let temp = {
        //             token: res.data.token,
        //             userBookList: res.data.userBookList,
        //             readingList: res.data.readingList
        //         }

        //         // if(res.data.token === undefined && res.data.userBookList === undefined && res.data.readingList === undefined ) {
        //         //     goToGoogle();
        //         // }

                

        //         //timer = null;
        //         localStorage.setItem('token', res.data.token);
        //         localStorage.setItem('userBookList', res.data.userBookList);
        //         localStorage.setItem('readingList', res.data.readingList);
        //         localStorage.setItem('userId', res.data.userid);
        //         //window.location.pathname = '/home';
        //     })
        //     .catch(err => {
        //         console.log("Not properly authenticated!");
        //         console.log("Error", err);
        //     })

        // }

        // if(newWindow) {
        //     timer = setInterval(() => {
        //         fetchUser();
        //         console.log('Authenticated!');
        //         if(timer) {
        //             clearInterval(timer);
        //         }
        //     }, 500);
        // }
        
        
    }
    return (
        <GoogleButton
                type="submit"
                fullWidth
                disableElevation
                variant="contained"
                sx={{ mt: 3, mb: 2, pt:2, pb:2, color: 'black', fontSize: '14px'}}
                onClick = {() => goToGoogle()}
            ><span style = {{marginRight: 35, marginTop: 'auto', width: '22px', height: '22px'}}><img style = {{width: '22px', height: '22px'}} src = "/logos/google_icon.png" alt = "access google"/></span>
               CONTINUE WITH GOOGLE
            </GoogleButton  >
    )
}