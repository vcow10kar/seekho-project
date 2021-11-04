import Splash1 from "./Splash1";
import Splash2 from "./Splash2";
import Splash3 from "./Splash3";
import styles from './splash.module.css';


export default function Splash() {
    return (
        <div>
        <Splash1 style = {styles.gallery_cell}/>
        <Splash2 style = {styles.gallery_cell}/>
        <Splash3 style = {styles.gallery_cell}/>
        </div>
    )
}