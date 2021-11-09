import styles from './academics.module.css';

function AcademicFieldItem({text, link}) {
    return (
        <div className = {styles.academicFieldItem}>
            <img src = {link} alt = {text}/>
            <p>{text}</p>
        </div>
    )
}

export default AcademicFieldItem;