import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './books.module.css';
import axios from 'axios';

export default function AcademicBooks() {
    const [book, setBook] = useState({});
    const {id}  = useParams();
    const getBook = () => {
        axios({
            method: "get",
            url: `http://localhost:5000/books/${id}`,
        })
        .then(res => {
            console.log(res.data);
            setBook(res.data.book);
        })
        .catch(err => {
            console.log("Error:", err);
        })
    }

    const addToReadList = () => {
        let readingListId = localStorage.getItem('readingList');

        if(!readingListId) {
            window.location.pathname = '/signIn';
        } else {
            axios({
                method: "patch",
                url: `http://localhost:5000/readingList/${readingListId}/books`,
                data: {
                    book: book._id
                }
            })
            .then(res => {
                console.log(res.data);
                setBook(res.data.book);
            })
            .catch(err => {
                console.log("Error:", err);
            }) 
        }
    }

    const addToBookList = () => {
        let bookListId = localStorage.getItem('userBookList');

        if(!bookListId) {
            window.location.pathname = '/signIn';
        } else {
            axios({
                method: "patch",
                url: `http://localhost:5000/userBookList/${bookListId}/books`,
                data: {
                    book: book._id
                }
            })
            .then(res => {
                console.log(res.data);
                setBook(res.data.book);
            })
            .catch(err => {
                console.log("Error:", err);
            }) 
        }
    }

    useEffect(() => {
        getBook();
    }, []);
    return (
        <div className = {styles.bookCoverPage}>
            <img src = {book.coverImageUrl} alt = {book.title}/>

            <div className = {styles.readDiv}>
                <div onClick = {addToReadList} className = {styles.readList}>
                    <img src = "/logos/addReadList.png" alt = "Add to ReadList"/>
                    <p>Add to Readlist</p>
                </div>

                <div onClick = {addToBookList} className = {styles.readNow}>
                    <img src = "/logos/readNow.png" alt = "Add to ReadList"/>
                    <p>Read Now</p>
                </div>
            </div>
        </div>
    )
}