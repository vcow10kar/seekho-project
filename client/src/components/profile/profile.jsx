import "./profile.css";
import vector9 from "./vector9.png";
import { ProfileDiv } from "./profile_div";
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
    <div className = "profilePage">
      <NavBar disp = {"/explore"}/>
      <div className = "mainContent">
        <div id="section1">
          <h3 id="you">YOU</h3>
          <div id="innersection1">
            <div id="circlular-profile"></div>
            <div id="user_div">
              <p id="user_id">{email}</p>
            </div>
            <div id="arrow-icon">
              <img className="arrow_icon" src={vector9} alt="vector9.png" />
            </div>
          </div>
        </div>

        <div id="section2">
          <div>
            <ProfileDiv name="Account Settings" />
            <hr />
            <ProfileDiv name="Seekho Settings" />
          </div>
        </div>

        <div id="mybooks">
          <h3>MY BOOKS</h3>
          <ProfileDiv name="Downloaded Books" />
          <hr />
          <ProfileDiv name="My Readlist" />
        </div>

        <div id="other">
          <h3>OTHER</h3>
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
  );
};

