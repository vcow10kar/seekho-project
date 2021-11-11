import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import { Footer } from '../Footer/Footer';
import styles from './embedPDF.module.css';
import {Pdf} from '../PdfNavbar/Pdf';

function EmbedPDF() {
    const obj = useParams();
    console.log(obj);
    const {id} = useParams();
    const [book, setBook] = useState({});
    
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

    useEffect(() => {
        getBook();
    }, []);

    return (
        <div className = {styles.embedPDFPage}>
            <Pdf book = {book}/>
            <iframe className = {styles.pdf} src = {book.pdf_file_url ? book.pdf_file_url : "https://drive.google.com/file/d/1ZwgUkCbVXdia-iwq8jHa-B3Zldb7cZw7/preview"} border = "0" width="400" height="510" allow="autoplay"></iframe>
            {/* <Footer/>    */}
        </div>
    )
}

export default EmbedPDF;