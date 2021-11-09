import styles from './mybooks.module.css';
import MyBooksIndividual from "./MyBooksIndividual";
import { useState, useRef } from "react";
import Carousel from "react-elastic-carousel";
import ReadingListLinks from './ReadingListLinks';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function MyBooks() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const carouselRef = useRef();

    const links = [
        {
            source: "/assets/twemoji_black-heart.png",
            text: "Readlist"
        },
        {
            source: "/assets/carbon_in-progress.png",
            text: "Reading Now"
        },
        {
            source: "/assets/ant-design_cloud-download-outlined.png",
            text: "Downloaded books"
        },
        {
            source: "/assets/fluent_history-24-filled.png",
            text: "Recently opened"
        },
        {
            source: "/assets/teenyicons_tick-circle-solid.png",
            text: "Finished Reading"
        }
    ]

    const items = [
        {
            id: 1,
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51k2g+1mSWL._SX329_BO1,204,203,200_.jpg",
            title: "The Alchemist",
            author: "Paulo Coelho"
        },

        {
            id: 2,
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41ARHyZ3FuL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
            title: "The Vanishing Half",
            author: "Brit Bennett"
        }, 
        {
            id: 3,
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41nzI1lhIVL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
            title: "The Promised Land",
            author: "Barack Obama"
        },

        {
            id: 4,
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41gVhoPaE5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
            title: "Think Like a Monk",
            author: "Jay Shetty"
        }
    ]
    return (
        <Router>
            {items.map(item => {
                return <Route path =  {`/books/${item.id}`} component = {MyBooks}/>
            })}
            
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
                    <a href = "/myBooks" className = {styles.allBooks}>
                        <p>All books</p>
                        <img className = {styles.arrow} src = "/assets/Vector13.png " alt = "Vector 13"/>
                    </a>
                </div>

                <div>
                    {links.map(item => {
                        return <ReadingListLinks link = {item}/>
                    })}
                </div>

            </div>
        </Router>
    )
}

export default MyBooks;