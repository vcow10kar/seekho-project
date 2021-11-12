import styles from '../Explore/explore.module.css';
import ExploreBookCategory from "../Explore/ExploreBookCategory";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const HomeExplore = ({categories}) => {

    return (
        <div>
            {categories.map(item => {
               return (
                <div key = {item.id}>
                    <div className = {styles.exploreCategoriesDiv}>
                        <p className = {styles.bookCategory}>Trending in {item.category_name}</p>
                        <SwapHorizIcon/>
                    </div>
                    <ExploreBookCategory category = {item._id}/>
                </div>
               )
            })}
        </div>
    )
}

export default HomeExplore;