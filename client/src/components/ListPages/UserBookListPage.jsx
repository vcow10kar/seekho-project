import { useEffect, useState } from "react";
import styles from './listPage.module.css';
import axios from "axios";
import IndividualBook from "./IndividualBook";

function UserBookListPage() {
    const [bookList, setBookList] = useState([]);

    const getBooklist = () => {
        let bookListId = localStorage.getItem('userBookList');

        axios({
            method: "get",
            url: `http://localhost:5000/userBookList/${bookListId}`,
        })
        .then(res => {
            let data = res.data.userBookList.book;
            setBookList(data);
        })
        .catch(err => {
            console.log("Error:", err);
        }) 
        
    }

    useEffect(() => {
        getBooklist();
    }, []);


    return (
        <div className = {styles.page}>
            <h2>Book List</h2>

            {bookList.length > 0 ?
                <div className = {styles.list}>
                    {bookList.map(item => {
                        return (
                            
                            <IndividualBook data = {item} key = {item.id}/>  
                                
                        )
                    })}
                </div>
           
            : 
            <p>Books added to Book List will be displayed here...</p>
        }
        </div>         
    )
}


export default UserBookListPage;