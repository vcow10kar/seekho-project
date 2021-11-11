import styles from './explore.module.css';
import {Link} from 'react-router-dom';

const ExploreAcademicBookItem = ({data}) => {

    return (
        <div className = {styles.exploreBook} >
            <div>
                <div className = {styles.exploreItem}>
                    <img src = {data.cover_image_url} alt = {data.title}/>
                </div>
                <Link to = {`/academicBooks/${data._id}`}>
                    <div className = {styles.bookInfo}>
                        <div>
                            <p className = {styles.bookTitle}>{data.title}</p>
                        </div>
                        
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default ExploreAcademicBookItem;