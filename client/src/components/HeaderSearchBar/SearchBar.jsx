import "./searchBar.css"
import searchIcon from "./searchIcon.png"
import circle from "./circle.png"
import leftArrow from "./leftArrow.png"
export const SearchBar=()=>{
    return(
    <div>
        <div className="parent">
            <div className="leftArrow">
                <img src={leftArrow} alt="left" />
            </div>
            <div className="input">
                <div className="inputDiv">
                <input className="inputBox" type="text" placeholder="Search Books,authors..." />
                </div>
                <div className="search">
                    <img src={searchIcon} alt="search icon" />

                </div>
            </div>
            <div className="circle">
                <img src={circle} alt="circle" />
            </div>

        </div>
    </div>
    )
}