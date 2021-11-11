import { useEffect, useState } from "react";
import styles from './initialPages.module.css';
import SeekhoPage2 from "./SeekhoPage2";

function SeekhoLogo() {

    const [logo1, setLogo1] = useState(true);
    const [logo2, setLogo2] = useState(false);

    function startAnimation() {
        setTimeout(function() { 
        //    window.location.pathname = "/splash";
        setLogo1(false);
        setLogo2(true);
        goToPage()
        }, 3000);
    }

    function goToPage() {
        setTimeout(function() {
            setLogo2(false);
            window.location.pathname = "/splash";
        }, 3000)
    }

    useEffect(() => {
        startAnimation();
        localStorage.setItem('token', "");
        localStorage.setItem('userBookList', "");
        localStorage.setItem('readingList', "");
        localStorage.setItem('userId', "");
    }, []);

    return (
        <div>

                <div className = {styles.seekhoLogoPage}>
                    {logo1 ? 
                        <img className = "w3-container w3-center w3-animate-zoom" style = {{width: "120px", height: "90.57px", marginTop: "270px"}} src = "/logos/seekhoLogo.png" alt = "Seekho Logo"/>
                    : null}

                    {logo2 ? 
                        <SeekhoPage2/>
                    : null}
                </div>
            
            
            
        </div>
        
    )
}

export default SeekhoLogo;