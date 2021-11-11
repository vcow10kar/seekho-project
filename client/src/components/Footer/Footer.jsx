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
  return (
    <div>
      <Box className="footer">
        <div className="footer_homebtn">
          <HomeOutlinedIcon></HomeOutlinedIcon>
          <div>Home</div>
        </div>
        <div className="footer_explorebtn">
          <ExploreOutlinedIcon></ExploreOutlinedIcon>
          <div>Explore</div>
        </div>
        <div className="footer_booksbtn">
          <CollectionsBookmarkOutlinedIcon></CollectionsBookmarkOutlinedIcon>
          <div>My Books</div>
        </div>
        <div className="footer_profilebtn">
          <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
          <div>Profile</div>
        </div>
      </Box>
    </div>
  );
}
export { Footer };
