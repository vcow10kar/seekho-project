function AcademicFieldItem({text, link}) {
    return (
        <div>
            <img src = {link} alt = {text}/>
            <p>{text}</p>
        </div>
    )
}

export default AcademicFieldItem;