import React from "react";
import { Box, Link } from "@mui/material";
import styles from './signin.module.css';
import axios from "axios";
import GoogleSignIn from "./GoogleSignIn";
import FacebookSignIn from "./FacebookSignIn"
import {SignInButton as SignUpButton, FormText, LinkWrapper, AlertWrapper, PasswordMsg, FormTextPassword} from './SignInWrappers'

export default function SignUp() {

    const [emailError, setEmailError] = React.useState(null);
    const [passwordError, setPasswordError] = React.useState(null);

    function handleClick(e) {
        e.preventDefault();
        const data  = new FormData(e.target);

        const payload = {
            email: data.get('email'),
            password: data.get('password'),
            role: "user"
        }

        axios({
            method: 'post',
            url: 'http://localhost:5000/signUp',
            data: payload
        })
        .then(res => {
            if(res.data.errors) {
                let error = JSON.parse(res.data.errors);
                error.map(item => {
                    if(item['param'] === 'email') {
                        setEmailError(item['msg'])
                    } else if(item['param'] === 'password') {
                        setPasswordError(item['msg'])
                    }
                })

            } else {
                setEmailError(null)
                setPasswordError(null)

                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userBookList', res.data.userBookList);
                localStorage.setItem('readingList', res.data.readingList);
                localStorage.setItem('userId', res.data.userid);
                localStorage.setItem('signIn', true);
                window.location.pathname = '/home';
            }
        })
        .catch(err => {
            console.log("Error:", err);
        })
    }

    return (
        <div className = {styles.signInPage}>
            <Box component = "form" onSubmit = {handleClick} className = {styles.signin}>
                <img src = "/logos/Group_22.png" alt = "seekho" style = {{margin: 'auto'}}/>

                <p className = {styles.signInPageHeader}>SIGN UP</p>

                <FormText
                    margin = "normal"
                    id = "email"
                    //label = "Email Address"
                    name = "email"
                    placeholder = "Email Address"
                    variant="standard"
                    InputProps={{
                            disableUnderline: true,
                    }}
                    fullWidth autoFocus required
                />

                {emailError ? <AlertWrapper severity="error">{emailError}</AlertWrapper> : null}
                
                <FormTextPassword
                    margin = "normal"
                    id = "password"
                    //label = "Password"
                    name = "password"
                    variant="standard"
                    InputProps={{
                            disableUnderline: true,
                    }}
                    placeholder = "Password"
                    // helperText = "Password should have 8-20 alphanumeric characters & a special character"
                    sx={{mb: 0}}
                    type="password"
                    fullWidth autoFocus required
                />
                <PasswordMsg>Password should have 8-20 alphanumeric characters & a special character</PasswordMsg>

                {passwordError ? <AlertWrapper severity="error">{passwordError}</AlertWrapper> : null}

                <SignUpButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, pt:2, pb:2}}
                >
                SIGN UP
                </SignUpButton  >

                <LinkWrapper>
                    <Link href="/signIn" underline="hover" sx = {{color: 'black', fontSize: '14px'}}>{'Already have an account?'}</Link>
                </LinkWrapper>

                

                <GoogleSignIn/>
                <FacebookSignIn/>


                <a href = "/home">Skip</a>
            
            </Box>
        </div>
        
    )
}