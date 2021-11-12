import ReadingListPage from "./ReadingListPage";
import UserBookListPage from "./UserBookListPage";
import styles from './listPage.module.css';
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

function ListPages() {

    return (
        <div>
            <Navbar/>
            <div className = {styles.listPage}>
            

            <ReadingListPage/>

            <UserBookListPage/>
            </div>
            <Footer/>
        </div>
        
        
    )
}

export default ListPages;