import "./resume.css"
export const Resume=({resumeColor,resumeLink,resumeTag,resumeAuthor})=>{
    
    return (
        <div>
    
        <div className="resume-parent">
        <div className="resume">
        {/* style={{background :`${resumeColor}`}} */}

            
            <div ><img className="resume-coverImage" src={resumeLink} alt="coverimg"  /></div>
            <div>
            <div className="resume-tag">{resumeTag}</div>
            
            <div className="resume-author">{resumeAuthor}</div>
            <div>
            <div className="range">92%
            </div>

            </div></div>
            
        </div>
        </div>
        </div>
    
        
    )
}
