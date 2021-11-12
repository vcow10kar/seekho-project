import React from "react";
import { Box } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link } from "react-router-dom";

import styles from "./navbar.module.css";

function Navbar({disp}) {
  if(!disp) {
    disp = '/profile';
  }
  const [display, setDisplay] = React.useState(disp);

  const handleChange = () => {
    setDisplay(!display);
  };

  const handleClick = () => {
    window.location.pathname = '/home';
  }
  const children = [
    <div>
      <Link to = {disp}>
        <img className = {styles.menuButton} src = "/logos/cil_hamburger-menu.png" alt = "Menu"/>
      </Link>
    </div>,
  ];
  const control = {
    value: display,
    onChange: handleChange,
    exclusive: false,
  };
  return (
    <div>
      {/* <h1>Navbar</h1> */}
      <Box className={styles.navbar}>
        <Box className= {styles.navbar_inner}>
          <img
            className= {styles.navbar_applogo}
            src="/assets/SeekhoMainLogo.png"
            alt="seekho"
            onClick = {handleClick}
          />
          <div
            className= {styles.navbar_menutogglebtn}
            size="small"
            {...control}
          >
            {children}
          </div>
        </Box>
      </Box>
    </div>
  );
}
export default Navbar;
