import styles from './mybooks.module.css';

function ReadingListLinks({ link }) {
    return(
        <a href = "/home" className = {styles.readingLinks}>
            <img src = {link.source} alt = {link.source}/>
            <p>{link.text}</p>
            <img className = {styles.arrow} src = "/assets/Vector13.png " alt = "Vector 13"/>
        </a>
    )
}

export default ReadingListLinks;