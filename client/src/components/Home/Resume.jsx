import "./resume.css"
import {Link} from "react-router-dom";

export const Resume=({resumeId, resumeColor,resumeLink,resumeTag,resumeAuthor})=>{
    
    return (
        <div>
            <div className="resume-parent">
                <div className="resume">
                {/* style={{background :`${resumeColor}`}} */}
                        <div ><img className="resume-coverImage" src={resumeLink} alt="coverimg"  /></div>
                        <div className = "book-link">
                            <Link to = {`/displayBook/${resumeId}`}>
                                <div className="resume-tag">{resumeTag}</div>
                                
                                <div className="resume-author">by {resumeAuthor}</div>
                            </Link> 
                            <div className = "resume-percentage-div">
                                <div className="grey-range">
                                    <div className = "orange-range"></div>
                                </div> 
                                <p>92%</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    
        
    )
}
