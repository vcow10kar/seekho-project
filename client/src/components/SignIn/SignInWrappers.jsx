import styled from 'styled-components';
import { TextField, Button, Box, Alert } from "@mui/material";

const SignInButton = styled(Button)({
    backgroundColor: 'black',
    width: '280px',
    height: '54px',
    fontWeight: 500,
    fontsize: '14px',
    lineHeight: '20px',
    '&:hover': {
        backgroundColor: 'grey'
    },

    '&.MuiButton-root': {
        borderRadius: ' 12px'
    }, 
})

const FormText = styled(TextField)({
    width: '280px',
    height: '54px',
    backgroundColor: '#dcddde',
    borderColor: '#dcddde',
    margin: '20px auto',
    
    '&:hover': {
        
    },

    '&:active': {
        
    },

    '&.MuiTextField-root' : {
        border: '0px solid black',
        borderRadius: '12px'
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
    fontSize: '12px', 
    width: '280px', 
    borderRadius: '12px',

    '& > div:nth-child(1)': {
        width: '20%',
        margin: 'auto'
    },

    '& > div:nth-child(2)': {
        width: '80%',
        textAlign: 'left'
    },

    '& > .MuiAlert-icon': {
        margin: 'auto',
        padding: '0px',
        textAlign: 'left' 
    }
})

const GoogleButton = styled(Button)({
    backgroundColor: '#dcddde',
    width: '280px',
    height: '54px',
    fontWeight: 500,
    fontsize: '14px',
    lineHeight: '20px',
    '&:hover': {
        backgroundColor: '#c4c4c4'
    },

    '&.MuiButton-root': {
        borderRadius: ' 12px'
    }
})

export {SignInButton, FormText, LinkWrapper, AlertWrapper, GoogleButton}