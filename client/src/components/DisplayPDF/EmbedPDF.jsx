import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

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
            console.log(res.data);
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
        <iframe src = {book.pdf_file_url ? book.pdf_file_url : "https://drive.google.com/file/d/1ZwgUkCbVXdia-iwq8jHa-B3Zldb7cZw7/preview"} border = "0" width="400" height="510" allow="autoplay"></iframe>
    )
}

export default EmbedPDF;