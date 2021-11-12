import { useEffect, useState } from "react";
import styles from './listPage.module.css';
import axios from "axios";
import IndividualBook from "./IndividualBook";

function ReadingListPage() {
    const [readingList, setReadingList] = useState([]);

    const getReadlist = () => {
        let readListId = localStorage.getItem('readingList');
        axios({
            method: "get",
            url: `http://localhost:5000/readingList/${readListId}`,
        })
        .then(res => {
            let data = res.data.readingList.book;
            console.log("Reading List:", data);
            setReadingList(data);
        })
        .catch(err => {
            console.log("Error:", err);
        }) 
        
    }

    useEffect(() => {
        getReadlist();
    }, []);


    return (
        <div className = {styles.page}>
            <h2>Reading List</h2>

            {readingList.length > 0 ?
                <div className = {styles.list}>
                    {readingList.map(item => {
                                return (
                                    <div>
                                        <IndividualBook data = {item} key = {item.id}/>  

                                        <div className = {[styles.buttonDiv,styles.block]}></div>
                                    </div>  
                                )
                            })}
                </div>

                :

                <p>Books added to Read List will be displayed here...</p>
            }
        </div>         
    )
}


export default ReadingListPage;