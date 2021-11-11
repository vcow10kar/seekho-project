import React from "react";
import { Box } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";

import "./navbar.css";

function Navbar() {
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const children = [
    <ToggleButton value="left" key="left">
      <FormatAlignLeftIcon />
    </ToggleButton>,
  ];
  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };
  return (
    <div>
      <h1>Navbar</h1>
      <Box className="navbar">
        <Box className="navbar_inner">
          <img
            className="navbar_applogo"
            src="/Image/Group26.png"
            alt="seekho"
          />
          <ToggleButtonGroup
            className="navbar_menutogglebtn"
            size="small"
            {...control}
          >
            {children}
          </ToggleButtonGroup>
        </Box>
      </Box>
      <Box className="footer">
        <div className="footer_homebtn">
          <HomeOutlinedIcon></HomeOutlinedIcon>
          <div>Home</div>
        </div>
        <div className="footer_explorebtn">
          <ExploreOutlinedIcon></ExploreOutlinedIcon>
          <div>Explore</div>
        </div>
      </Box>
    </div>
  );
}
export { Navbar };
