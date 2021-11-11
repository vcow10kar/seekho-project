import React from "react";
import { Box } from "@mui/material";
// import ToggleButton from "@mui/material/ToggleButton";
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./footer.css";
function Footer() {
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
    window.location.pathname = '/profile';
  }

  return (
    <div className = "footerComponent">
      <Box className="footer">
        <div onClick = {goToHome} className="footer_homebtn">
          <HomeOutlinedIcon/>
          <div>Home</div>
        </div>
        <div onClick = {goToExplore} className="footer_explorebtn">
          <ExploreOutlinedIcon/>
          <div>Explore</div>
        </div>
        <div onClick = {goToMyBooks} className="footer_booksbtn">
          <CollectionsBookmarkOutlinedIcon/>
          <div>My Books</div>
        </div>
        <div onClick = {goToProfile} className="footer_profilebtn">
          <AccountCircleOutlinedIcon/>
          <div>Profile</div>
        </div>
      </Box>
      <div className = "footerBottom">

      </div>
    </div>
  );
}
export { Footer };
