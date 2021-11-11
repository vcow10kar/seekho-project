import "./profile.css";
import vector9 from "./vector9.png";
import { ProfileDiv } from "./profile_div";
import NavBar from "../Navbar/Navbar";

export default function Profile({disp}) {
  return (
    <div className = "profilePage">
      <NavBar disp = {"/explore"}/>
      <div className = "mainContent">
        <div id="section1">
          <h3 id="you">YOU</h3>
          <div id="innersection1">
            <div id="circlular-profile"></div>
            <div id="user_div">
              <p id="username">Vishal Rathod</p>
              <p id="user_id">@Vishal</p>
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
          <ProfileDiv name="Log Out" />
        </div>
        <br/>
        <br/>
      </div>
      
    </div>
  );
};

