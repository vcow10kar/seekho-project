import styles from './explore.module.css';

const ExploreItem = ({data}) => {
    return (
        <div >
            <div className = {styles.exploreItem}>
                <img src = {data.coverImageUrl} alt = {data.title}/>
            </div>
            <div>
                <p>{data.title}</p>
                <p>by {data.author}</p>
            </div>
        </div>
    )
}

export default ExploreItem;