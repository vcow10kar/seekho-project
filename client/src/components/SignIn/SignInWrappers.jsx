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

const FormText = styled.input`
    width: 280px;
    height: 54px;
    border-radius: 12px;
    background-color: #dcddde;
    padding-left: 20px;
    border: 0px;
    margin: 20px auto;
    
    &:hover, &:active {
        border: 1px solid black;
    }
`

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

const GoogleButton = styled.button({
    backgroundColor: '#dcddde',
    //borderRadius: '12px',
    width: '280px',
    height: '55px',
    fontWeight: 500,
    fontsize: '14px',
    lineHeight: '20px',
    textColor: 'black',
    borderRadius: '12px',

    '&.MuiButton-root': {
        borderRadius: ' 12px'
    }, 

    '&:hover': {
        backgroundColor: '#c4c4c4',
        
    }
})

export {SignInButton, FormText, LinkWrapper, AlertWrapper, GoogleButton}