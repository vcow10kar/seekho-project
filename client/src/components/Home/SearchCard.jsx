import styles from './search.module.css';
import { Search } from "./Search"
import { SearchBar } from '../HeaderSearchBar/SearchBar';
export const SearchCard=()=>{
    return(
        <div className = {styles.searchPage}>
            <SearchBar/>
            <div className={styles.parent}>
                <div className={styles.main}>
                    <Search navbar={"All"}  />
                    <Search navbar={"Books"}  />
                    <Search navbar={"Authors"}  />
                    <Search navbar={"Audiobooks"}  />
                    <Search navbar={"Readlist"}  />
                </div>
                <hr className={styles.line} />
                <div className={styles.main}>
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