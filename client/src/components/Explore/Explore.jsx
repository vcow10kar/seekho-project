import styles from './explore.module.css';
import AcademicFields from "../Academics/AcademicFields"
import ExportCarousel from "./ExportCarousel"
export default function Explore() {
    return (
        <div className = {styles.explorePage}>
            <p>EXPLORE PAGE!</p>
            <ExportCarousel/>
            <AcademicFields />
        </div>
    )
}