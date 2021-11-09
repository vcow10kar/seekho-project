import styles from './mybooks.module.css';
import MyBooksIndividual from "./MyBooksIndividual";
import {Stack} from '@mui/material';

function MyBooks() {
    const items = [
        {
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51k2g+1mSWL._SX329_BO1,204,203,200_.jpg",
            title: "The Alchemist",
            author: "Paulo Coelho"
        },

        {
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41ARHyZ3FuL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
            title: "The Vanishing Half",
            author: "Brit Bennett"
        }
    ]
    return (
        <div className = {styles.myBooksPage}>
            <h2 className = {styles.continue}>Continue where you left...</h2>
            <Stack spacing = {2} direction = "row">
                {items.map(item => {
                    return (
                        <MyBooksIndividual data = {item}/>          
                    )
                })}
            </Stack>
        </div>
    )
}

export default MyBooks;