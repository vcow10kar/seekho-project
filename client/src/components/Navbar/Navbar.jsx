import React from "react";
import { Box } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  const [display, setDisplay] = React.useState(false);

  const handleChange = () => {
    setDisplay(!display);
  };
  const children = [
    <ToggleButton value="left" key="left">
      <Link to = "/profile">
        <img src = "/logos/cil_hamburger-menu.png" alt = "Menu"/>
      </Link>
    </ToggleButton>,
  ];
  const control = {
    value: display,
    onChange: handleChange,
    exclusive: false,
  };
  return (
    <div>
      {/* <h1>Navbar</h1> */}
      <Box className="navbar">
        <Box className="navbar_inner">
          <img
            className="navbar_applogo"
            src="/assets/SeekhoMainLogo.png"
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
    </div>
  );
}
export default Navbar;
