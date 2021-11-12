import styles from './mybooks.module.css';
import {Link} from "react-router-dom";

function MyBooksIndividual({data}) {

    return (
        <div className = {styles.book}>
            
                <img className = {styles.bookImg} src = {data.coverImageUrl} alt = {data.title}/>
                <Link to = {`/displayBook/${data._id}`}>
                    <p className = {styles.bookTilte}>{data.title}</p>
                    <p className = {styles.bookAuthor}>by {data.author}</p>
                </Link>
                
        </div>
    )
}

export default MyBooksIndividual;