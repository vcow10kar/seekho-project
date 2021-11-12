import axios from "axios";
import { FacebookButton } from "./SignInWrappers";
import { useState } from "react";


const init = {
  token: "",
  userBookList: "",
  readingList: "",
};

export default function FacebookSignIn() {
  // const [user, setUser] = useState(init);

  function goToFacebook() {
    //let timer = null;

    localStorage.setItem("facebookLogin", true);

    const facebookLoginURL = "http://localhost:5000/auth/facebook/callback";
    const newWindow = window.open(facebookLoginURL, "_self", "width = 411");
  }
  return (
    <FacebookButton
      type="submit"
      fullWidth
      disableElevation
      variant="contained"
      sx={{ mt: 3, mb: 2, pt: 2, pb: 2, color: "black", fontSize: "14px" }}
      onClick={() => goToFacebook()}
    >
      <span
        style={{
          marginRight: 35,
          marginTop: "auto",
          width: "22px",
          height: "22px",
        }}
      >
        <img
          style={{ width: "22px", height: "22px" }}
          src="/logos/facebook_icon.png"
          alt="access facebook"
        />
      </span>
      CONTINUE WITH FACEBOOK
    </FacebookButton>
  );
}