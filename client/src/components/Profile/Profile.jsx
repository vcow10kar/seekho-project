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
    window.location.pathname = "/";
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
              <div className = {styles.section1}>
                <h3 className={styles.you}>YOU</h3>
                <div className = {styles.innersection1}>
                  <div className = {styles["circlular-profile"]}></div>
                  <div className = {styles["user_div"]}>
                    <p className = {styles["user_id"]}>{email}</p>
                  </div>
                  <div className = {styles["arrow-icon"]}>
                    <img className="arrow_icon" src={vector9} alt="vector9.png" />
                  </div>
                </div>
              </div>

              <div style = {{textAlign: 'left'}} className = {styles.section2}>
                <div>
                  <ProfileDiv name="Account Settings" />
                  <hr />
                  <ProfileDiv name="Seekho Settings" />
                </div>
              </div>

              <div className={styles.mybooks}>
                <h3 className={styles}>MY BOOKS</h3>
                <ProfileDiv name="Downloaded Books" />
                <hr />
                <ProfileDiv name="My Readlist" />
              </div>

              <div className={styles.other}>
                <h3 className={styles.you}>OTHER</h3>
                <ProfileDiv name="Terms of Use" />
                <hr />
                <ProfileDiv name="Privacy Policy" />
                <hr />
                <ProfileDiv name="Contact Us" />
                <hr />
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

