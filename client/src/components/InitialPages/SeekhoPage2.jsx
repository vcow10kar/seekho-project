import styles from "./seekhoPage.module.css";

function SeekhoPage2() {
    return (
        <div className = {styles.imageDiv}>
            <img className = {["image w3-content", "w3-section, w3-animate-right"]} src = "/assets/SeekhoMainLogo.png" alt = "Seekho Logo"/>

            <p className = {["w3-content", "w3-section, w3-animate-bottom"]}>From Academics to Leisure, One stop for all your reading materials.</p>
        </div>
    )
}

export default SeekhoPage2;