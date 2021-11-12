import React from "react";
import { Box } from "@mui/material";
// import ToggleButton from "@mui/material/ToggleButton";
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styles from "./footer.module.css";
import {useLocation} from 'react-router-dom';

function Footer() {
  const location = useLocation();

  let path = location.pathname;

  const goToHome = () => {
    window.location.pathname = '/home';
  }

  const goToExplore = () => {
    window.location.pathname = '/explore';
  }

  const goToMyBooks = () => {
    window.location.pathname = '/myBooks';
  }

  const goToProfile = () => {
    window.location.pathname = '/user';
  }

  return (
    <div className = {styles.footerComponent}>
      <Box className={styles.footer}>

        <div onClick = {goToHome} className={styles.footer_homebtn}>
          {path === "/home" ?
            <> 
              <img style = {{opacity: "1"}} src = "/assets/bx_bx-home.png" alt = "Home"/>
              <div style = {{fontWeight: 900,  color: 'black'}}>Home</div>
            </>
            :
            <>
            <img src = "/assets/bx_bx-home.png" alt = "Home"/>
            <div>Home</div>
            </>
          }
        </div>


        <div onClick = {goToExplore} className={styles.footer_explorebtn}>
          {path === "/explore" ?
              <> 
                <img style = {{opacity: "1"}} src = "/assets/ic_outline-explore.png" alt = "Explore"/>
                <div style = {{fontWeight: 900, color: 'black'}}>Explore</div>
              </>
              :
              <>
              <img src = "/assets/ic_outline-explore.png" alt = "Explore"/>
              <div>Explore</div>
              </>
            }
        </div>


        <div onClick = {goToMyBooks} className= {styles.footer_booksbtn}>
          {path === "/myBooks" ?
                <> 
                  <img style = {{opacity: "1"}} src = "/assets/bx_bx-book.png" alt = "Book"/>
                  <div style = {{fontWeight: 900,  color: 'black'}}>My Books</div>
                </>
                :
                <>
                <img src = "/assets/bx_bx-book.png" alt = "Book"/>
                <div>My Books</div>
                </>
          }
        </div>


        <div onClick = {goToProfile} className={styles.footer_profilebtn}>
          {path === "/profile" ?
                  <> 
                    <img style = {{opacity: "1"}} src = "/assets/iconoir_profile-circled.png" alt = "Profile"/>
                    <div style = {{fontWeight: 900,  color: 'black'}}>Profile</div>
                  </>
                  :
                  <>
                  <img src = "/assets/iconoir_profile-circled.png" alt = "Profile"/>
                  <div>Profile</div>
                  </>
            }
        </div>
      </Box>

      <div className = {styles.footerBottom}>

      </div>
    </div>
  );
}
export { Footer };
