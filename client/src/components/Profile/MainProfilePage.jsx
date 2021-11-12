import styles from "./mainProfilePage.module.css";
import Switch from '@mui/material/Switch';


function MainProfilePage() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <div>
            <div className = {styles.header}>
                <img src = "/assets/leftArrow.png" alt = "arrow"/>
                <p>Edit Profile</p>
            </div>


            <div>
                <div>
                    <p>Username</p>

                    <input type = "text" />
                </div>

                <div>
                    <p>Email address</p>

                    <input type = "text" />
                </div>


                <div>
                   <p>Change Password</p>
                   <img src = "/assets/Vector13.png" alt = "icon"/>
                </div>

                <div>
                   <p>Night Mode</p>
                   <Switch {...label} defaultChecked color="default" />
                </div>
            </div>
        </div>
    )
}

export default MainProfilePage;