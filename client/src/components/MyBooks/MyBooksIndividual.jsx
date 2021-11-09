import styles from './mybooks.module.css';
import {Link} from "react-router-dom";

function MyBooksIndividual({data}) {

    return (
        <div className = {styles.book} key = {data.id}>
            
                <img className = {styles.bookImg} src = {data.imageUrl} alt = {data.title}/>
                <Link to = {"/books/" + data.id}>
                <p className = {styles.bookTilte}>{data.title}</p>
                <p className = {styles.bookAuthor}>by {data.author}</p>
            </Link>
        </div>
    )
}

export default MyBooksIndividual;