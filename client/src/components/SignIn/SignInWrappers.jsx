import styled from 'styled-components';
import { TextField, Button, Box, Alert } from "@mui/material";

const SignInButton = styled(Button)({
    backgroundColor: 'black',
    //borderRadius: '12px',
    width: '280px',
    height: '54px',
    fontWeight: 500,
    fontsize: '14px',
    lineHeight: '20px',
    '&:hover': {
        backgroundColor: 'grey'
    }
})

const FormText = styled(TextField)({
    width: '280px',
    height: '54px',
    '&:hover': {
        borderColor: 'black'
    },

    '&.Mui-focused':{
        borderColor: 'black'
    }
})

const LinkWrapper = styled(Box)`
    font-size: 12px;
    color: black;

    & > Link {
        color: grey;
    }

`

const AlertWrapper = styled(Alert) ({
    fontSize: '14px', 
    width: '248px', 
    height: '35px',
    margin: '0px',

})

const GoogleButton = styled(Button)({
    backgroundColor: '#dcddde',
    //borderRadius: '12px',
    width: '280px',
    height: '55px',
    fontWeight: 500,
    fontsize: '14px',
    lineHeight: '20px',
    textColor: 'black',
    '&:hover': {
        backgroundColor: '#c4c4c4',
        
    }
})

export {SignInButton, FormText, LinkWrapper, AlertWrapper, GoogleButton}