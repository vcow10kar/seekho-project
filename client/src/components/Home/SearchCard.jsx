import { Search } from "./Search"
export const SearchCard=()=>{
    return(
        <div>
            <div className="parent">
        <div className="main">
            <Search navbar={"All"}  />
            <Search navbar={"Books"}  />
            <Search navbar={"Authors"}  />
            <Search navbar={"Audiobooks"}  />
            <Search navbar={"Readlist"}  />
            <Search navbar={"Exit"}  />
            </div>
            <hr className="line" />
            <div className="main">
            <Search heading={"Recently searched"}/>
            <Search clearAll={"Clear All"}/>
            </div>
            <Search results={"Jay Shetty"}/>
            <Search results={"The fault in a star"}/>
            <Search results={"Think like a monk"}/>
            <Search results={"Domn deing"}/>
            <Search results={"The foolish king"}/>
            <Search results={"Don norman"}/>
            </div>
            </div>
    )
}