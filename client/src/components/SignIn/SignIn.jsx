import React from "react";
import {Box, Link} from "@mui/material";
import styles from './signin.module.css';
import axios from "axios";
import GoogleSignIn from "./GoogleSignIn";
import {SignInButton, FormText, LinkWrapper, AlertWrapper, PasswordMsg} from './SignInWrappers'

export default function SignIn() {

    const [emailError, setEmailError] = React.useState(null);
    const [passwordError, setPasswordError] = React.useState(null);

    function handleClick(e) {
        e.preventDefault();
        const data  = new FormData(e.target);

        const payload = {
            email: data.get('email'),
            password: data.get('password')
        }

        axios({
            method: 'post',
            url: 'http://localhost:5000/signIn',
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
                setEmailError(null);
                setPasswordError(null);

                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userBookList', res.data.userBookList);
                localStorage.setItem('readingList', res.data.readingList);
                localStorage.setItem('userId', res.data.userid);
                window.location.pathname = '/home';
            }
        })
        .catch(err => {
            console.log("Error:", err.errors);
        })
    }

    return (
        <Box component = "form" onSubmit = {handleClick} className = {styles.signin} autoComplete="off">
            <img src = "/logos/Group_22.png" alt = "seekho" style = {{margin: 'auto', marginBottom: '0px'}}/>

            <h3 style = {{marginTop: '0px'}}>SIGN IN</h3>

            
            <FormText
                margin = "normal"
                id = "email"
                //label = "Email Address"
                name = "email"
                type = "email"
                id="outlined-disabled"
                placeholder = "Email Address"
                variant="standard"
                InputProps={{
                        disableUnderline: true,
                }}
                fullWidth autoFocus required
            />

    
            {emailError ? <AlertWrapper severity="error">{emailError}</AlertWrapper> : null}


            <FormText
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
                sx={{mb: 2, borderColor: '#00000'}}
                type="password"
                id="outlined-disabled"
                fullWidth autoFocus required
            /> 
            <PasswordMsg>Password should have 8-20 alphanumeric characters & a special character</PasswordMsg>

            {passwordError ? <AlertWrapper severity="error">{passwordError}</AlertWrapper> : null}


            <SignInButton
              type="submit"
              fullWidth
              disableElevation
              variant="contained"
              sx={{ mt: 3, mb: 2, pt:2, pb:2}}
            >
              SIGN IN
            </SignInButton  >

            <LinkWrapper>
                <Link href="/signUp" underline="hover" sx = {{color: 'black'}}>{'Don’t have an account? Sign up'}</Link>
            </LinkWrapper>

            <GoogleSignIn/>
            
        </Box>
    )
}