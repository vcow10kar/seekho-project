import styles from './mybooks.module.css';
import MyBooksIndividual from "./MyBooksIndividual";
import { useState, useRef } from "react";
import {Stack} from '@mui/material';
import Carousel from "react-elastic-carousel";

function MyBooks() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const carouselRef = useRef();

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
        }, 
        {
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41nzI1lhIVL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
            title: "The Promised Land",
            author: "Barack Obama"
        },

        {
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41gVhoPaE5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
            title: "Think Like a Monk",
            author: "Jay Shetty"
        }
    ]
    return (
        <div className = {styles.myBooksPage}>
            <h2 className = {styles.continue}>Continue where you left...</h2>
            <Carousel
                ref={carouselRef}
                itemsToShow={3}
                showArrows={false}
                pagination={false}
                onChange={(currentItem) => setActiveItemIndex(currentItem.index)}
            >
                {items.map(item => {
                            return (
                                <MyBooksIndividual data = {item}/>          
                            )
                        })}
            </Carousel>

            <div className = {styles.booksNavigationLinks}>
                <p>All Books</p>
            </div>
                
            


        </div>
    )
}

export default MyBooks;