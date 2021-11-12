import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './mybooks.module.css';

function ReadingListLinks({ userBookList, readingList, link }) {
    const [list, setList] = useState(null);

    useEffect(() => {
        if((link.text === "Readlist" || link.text === "Reading Now") && (userBookList.book && readingList.book)) {
        let userBookList = localStorage.getItem('userBookList');
        let readingList = localStorage.getItem('readingList');

        // console.log(userBookList, readingList);

            if(userBookList && readingList) {
                if(link.text === "Reading Now") {
                    setList(userBookList.book.length + userBookList.academic.length);
                
                    axios.get(`http://localhost:5000/userBookList/${userBookList}`)
                    .then(res => {
                        setList(res.data.userBookList.book.length + res.data.userBookList.academic.length);
                    })
                    .catch(err => {
                        console.log("Error:", err);
                    })
                }

                if (link.text === "Readlist") {
                    axios.get(`http://localhost:5000/readingList/${readingList}`)
                    .then(res => {
                        setList(res.data.readingList.book.length + res.data.readingList.academic.length);
                    })
                    .catch(err => {
                        console.log("Error:", err);
                    })
                }
            }
        }
    }, [])

    console.log(userBookList, readingList);

    return(
        <a href = "/home" className = {styles.readingLinks}>
            <img style = {{opacity: 1}} src = {link.source} alt = {link.source}/>
            <p className = {styles.text}>{link.text}</p>
            <p className = {styles.count}>
                {list}
            </p>
            <img className = {styles.arrow} src = "/assets/Vector13.png " alt = "Vector 13"/>
        </a>
    )
}

export default ReadingListLinks;