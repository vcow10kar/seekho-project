import AcademicFields from "../Academics/AcademicFields";
import RecomCard from './RecomCard';
import Recommended from "./Recommended";
import Resume from "./Resume";
export default function Home() {
    
    return (
        <div>
            <p>This is the home page!!!!</p>
            <RecomCard/>
            {/* <Resume resumeColor = {} resumeLink = {} resumeTag = {} resumeAuthor = {}/> */}
        </div>
    )
}