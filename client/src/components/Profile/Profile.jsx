import styles from "./profile.module.css";
import vector9 from "./vector9.png";
import { ProfileDiv } from "./ProfileDiv";
import NavBar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile({disp}) {
  const [email, setEmail] = useState(null);

  const handleLogOut = () => {
    console.log("Hello");
    localStorage.setItem('token', "");
    localStorage.setItem('userBookList', "");
    localStorage.setItem('readingList', "");
    localStorage.setItem('userId', "");
    localStorage.setItem('signIn', 'false');
    window.location.pathname = "/";
  }

  const next = (text) => {
    window.location.pathname = text;
  }

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    console.log(userId);
    axios.get(`http://localhost:5000/users/${userId}`)
    .then(res => {
      setEmail(res.data.user.email)
    })
    .catch(err => {
      console.log("Error:", err);
    })
  }, []);
  return (
    <div>
        <NavBar disp = {"/explore"}/>
        <div styles = {{top: '83px'}} className = {styles.profilePage}>
            <div className = {styles.mainContent}>
              <div className = {styles.section1} onClick = {email ? () => {next("/user")} : () => {next("/signIn")}}>
                <h3 className={styles.you}>YOU</h3>
                <div className = {styles.innersection1}>
                  <div className = {styles.circlular_profile}></div>
                  <div className = {styles.user_div}>
                    <p className = {styles.user_id}>{email ? email : "Sign In"}</p>
                  </div>
                  <div className = {styles.you_arrow_icon}>
                    <img className={styles.arrow_icon} src={vector9} alt="vector9.png" />
                  </div>
                </div>
              </div>

              <div style = {{textAlign: 'left'}} className = {styles.section2}>
                <div>
                  <ProfileDiv name="Account Settings" />
                  <hr className = {styles.hr} />
                  <ProfileDiv name="Seekho Settings" />
                </div>
              </div>

              <div className={styles.mybooks}>
                <h3 className={styles.you} style = {{marginBottom: '10px'}}>MY BOOKS</h3>
                <ProfileDiv name="Downloaded Books" />
                <hr className = {styles.hr} />
                <ProfileDiv name="My Readlist" />
              </div>

              <div className={styles.other}>
                <h3 className={styles.you} style = {{marginTop: '36px', marginBottom: '10px'}}>OTHER</h3>
                <ProfileDiv name="Terms of Use" />
                <hr className = {styles.hr} />
                <ProfileDiv name="Privacy Policy" />
                <hr className = {styles.hr} />
                <ProfileDiv name="Contact Us" />
                <hr className = {styles.hr} />
                <div onClick = {handleLogOut}>
                  <ProfileDiv name="Log Out" />
                </div>
              </div>
              <br/>
              <br/>
            </div>
        </div>
    </div>
    
  );
};

