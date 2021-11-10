import styles from './explore.module.css';
import {Link} from 'react-router-dom';

const ExploreItem = ({data}) => {
    return (
        <div className = {styles.exploreBook} >
            <div>
                <div className = {styles.exploreItem}>
                    <img src = {data.coverImageUrl} alt = {data.title}/>
                </div>
                <Link to = {`/books/${data._id}`}>
                    <div className = {styles.bookInfo}>
                        <div>
                            <p className = {styles.bookTitle}>{data.title}</p>
                            <p className = {styles.bookAuthor}>by {data.author}</p>
                        </div>
                        
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default ExploreItem;