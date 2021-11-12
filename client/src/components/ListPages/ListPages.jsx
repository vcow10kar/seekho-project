import ReadingListPage from "./ReadingListPage";
import UserBookListPage from "./UserBookListPage";
import styles from './listPage.module.css';

function ListPages() {

    return (
        <div className = {styles.listPage}>
            <ReadingListPage/>

            <UserBookListPage/>
        </div>
        
    )
}

export default ListPages;