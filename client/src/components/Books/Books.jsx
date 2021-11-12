import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './books.module.css';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

export default function Books() {
    const [book, setBook] = useState({});
    const [message, setMessage] = useState("Add to Readlist");
    const {id}  = useParams();

    const closeWindow = () => {
        window.location.pathname = "/home";
    }

    const getBook = () => {
        axios({
            method: "get",
            url: `http://localhost:5000/books/${id}`,
        })
        .then(res => {
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
                setMessage("Book added to ReadList!")
            })
            .catch(err => {
                console.log("Error:", err);
            }) 
        }
    }

    const addToBookList = () => {
        let bookListId = localStorage.getItem('userBookList');
        let readList = localStorage.getItem("readingList");

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
                setBook(res.data.book);
            })
            .catch(err => {
                console.log("Error:", err);
            })

            axios({
                method: "patch",
                url: `http://localhost:5000/readingList/books/${readList}`,
                data: {
                    book: book._id
                }
            })
            .then(res => {
                console.log("Removed book from reading list!");
            })
            .catch(err => {
                console.log("Error:", err);
            })
        }

        window.location.pathname = `/displayBook/${id}`;
    }

    const checkBookInReadList = () => {
        let readList = localStorage.getItem("readingList");
        axios({
            method: "get",
            url: `http://localhost:5000/readingList/checkReadList/${readList}/${id}`,
        })
        .then(res => {
            console.log(res);
            if(res.data.message) {
                setMessage("Book present in ReadList");
            }
        })
        .catch(err => {
            console.log("Error:", err);
        })
    }

    useEffect(() => {
        getBook();
        if(localStorage.getItem("userBookList")) {
            checkBookInReadList();
        }
    }, []);
    return (
        <div className = {styles.bookCoverPage}>
            <div onClick = {closeWindow} className = {styles.closeIcon}>
                <CloseIcon sx={{ fontSize: 40 }}/>
            </div>
            <img src = {book.coverImageUrl} alt = {book.title}/>

            <div className = {styles.readDiv}>
                <div onClick = {addToReadList} className = {styles.readList}>
                    <img src = "/logos/addReadList.png" alt = "Add to ReadList"/>
                    <p>{message}</p>
                </div>

                <div onClick = {addToBookList} className = {styles.readNow}>
                    <img src = "/logos/readNow.png" alt = "Add to ReadList"/>
                    <p>Read Now</p>
                </div>
            </div>
        </div>
    )
}