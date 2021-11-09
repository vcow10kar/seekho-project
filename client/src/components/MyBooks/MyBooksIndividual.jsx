import styles from './mybooks.module.css';

function MyBooksIndividual({data}) {
    return (
        <div>
            <img className = {styles.bookImg} src = {data.imageUrl} alt = {data.title}/>
            <p className = {styles.bookTilte}>{data.title}</p>
            <p className = {styles.bookAuthor}>by {data.author}</p>

        </div>
    )
}

export default MyBooksIndividual;