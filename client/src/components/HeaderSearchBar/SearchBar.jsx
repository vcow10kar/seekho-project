import styles from "./searchBar.module.css"
export const SearchBar=({searchFunction})=>{

    const handleChange = (e) => {
        searchFunction(e.target.value);
    }

    return(
    <div className = {styles.searchParent}>
        <div className={styles.parent}>
            <div onClick = {() => {window.location.pathname = "/explore"}} className={styles.leftArrow}>
                <img src= "/assets/leftArrow.png" alt="left" />
            </div>
            <div className={styles.input}>
                <div className={styles.inputDiv}>
                <input onChange = {handleChange} className={styles.inputBox} type="text" placeholder="Search Books,authors..." />
                </div>
                <div className={styles.search}>
                    <img src="/assets/searchIcon.png" alt="search icon" />

                </div>
            </div>
            <div  onClick = {() => {window.location.pathname = "/user"}} className={styles.circle}>
                <img src="/assets/circle.png" alt="circle" />
            </div>
        </div>
    </div>
    )
}