import styles from "./mainProfilePage.module.css";
import Switch from '@mui/material/Switch';
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function MainProfilePage() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [mode, setMode] = useState(false);

    const handleChange = (e) => {
        console.log(e.target.value);
        setMode(!mode);
        console.log(mode);
    }

    const handleClick = () => {
        window.location.pathname = "/home";
    }
    return (
        <div className = {mode ? styles.darkProfilePage : styles.lightProfilePage}>
            <div className = {styles.header}>
                <span onClick = {handleClick}><ArrowBackIcon/></span>
                <p>Edit Profile</p>
            </div>

            <div>
                <div className = {styles.profilePicture}>

                </div>

                <p className = {styles.userName}>User Name <img src = "/assets/bi_pencil-square.png" alt = "pencil"/></p>
            </div>


            <div>
                <div className = {styles.userNameInput}>
                    <p>Username</p>

                    <div className = {styles.editUserName}>
                        <input type = "text" defaultValue = "username"  className = {styles.editUser}/>
                        <img src = "/assets/bi_pencil-square.png" alt = "pencil"/>
                    </div>
                </div>

                <div className = {styles.userNameInput}>
                    <p>Email address</p>

                    <div className = {styles.editUserName}>
                        <input type = "text" defaultValue = "email@domain.com" className = {styles.editUser}/>
                        <img src = "/assets/bi_pencil-square.png" alt = "pencil"/>
                    </div>
                    
                </div>


                <div className = {styles.changePassword}>
                   <p>Change Password</p>
                   <img src = "/assets/Vector13.png" alt = "icon"/>
                </div>

                <div  className = {styles.nightmode}>
                   <p>Night Mode</p>
                   <Switch {...label} onChange = {handleChange} color="default" />
                </div>
            </div>
        </div>
    )
}

export default MainProfilePage;