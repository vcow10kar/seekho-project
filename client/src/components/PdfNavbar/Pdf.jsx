import "./pdf.css"
import vector0 from "./vector0.png"
import vector2 from "./vector2.png"
import vector3 from "./vector3.png"
import vector5 from "./vector5.png"
export const Pdf=({book})=>{
    return(
        <div>
            <div className="parent">
                <div className="vector0">
                    <img src={vector0} alt="arrow" />
                </div>
                <div className="text">
                    {book}
                </div>
                <div className="vector2">
                    <img src={vector2} alt="search" />
                </div>
                <div className="vector3">
                    <img src={vector3} alt="share" />
                </div>
                <div className="vector5">
                    <img src={vector5} alt="dot" />
                </div>

            </div>
        </div>
    )
}