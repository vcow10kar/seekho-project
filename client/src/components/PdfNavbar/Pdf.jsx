import styles from "./pdf.module.css"
import vector0 from "./vector0.png"
import vector2 from "./vector2.png"
import vector3 from "./vector3.png"
import vector5 from "./vector5.png"
export const Pdf=({book})=>{

    const handleClick = () => {
        window.location.pathname = '/home';
    }

    return(
        <div>
            <div className={styles.parent}>
                <div className={styles.vector0} onClick = {handleClick}>
                    <img src={vector0} alt="arrow" />
                </div>
                <div className={styles.text}>
                    {book.title} by {book.author}
                </div>
                <div className={styles.vector2}>
                    <img src={vector2} alt="search" />
                </div>
                <div className={styles.vector3}>
                    <img src={vector3} alt="share" />
                </div>
                <div className={styles.vector5}>
                    <img src={vector5} alt="dot" />
                </div>

            </div>
        </div>
    )
}