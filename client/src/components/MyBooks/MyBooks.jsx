import styles from './mybooks.module.css';
import MyBooksIndividual from "./MyBooksIndividual";
import { useState, useRef, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import ReadingListLinks from './ReadingListLinks';
import axios from 'axios';
import NavBar from "../Navbar/Navbar";
import { Footer } from '../Footer/Footer';

function MyBooks() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const carouselRef = useRef();
    const [items, setItems] = useState([]);
    const [bookList, setBookList] = useState([]);
    const [readList, setReadList] = useState([]);
    // const [count, setCount] = useState(2);

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

    const getBooklist = () => {
        let bookListId = localStorage.getItem('userBookList');

        // console.log(bookListId);

        if(!bookListId) {
            window.location.pathname = '/signIn';
        } else {
            axios({
                method: "get",
                url: `http://localhost:5000/userBookList/${bookListId}`,
            })
            .then(res => {
                setItems(res.data.userBookList.book);
                setBookList(res.data.userBookList.book)
            })
            .catch(err => {
                console.log("Error:", err);
            }) 
        }
    }

    const getReadList = () => {
        let readingList = localStorage.getItem('readingList');

        axios.get(`http://localhost:5000/readingList/${readingList}`)
        .then(res => {
            setReadList(res.data.readingList);
        })
        .catch(err => {
            console.log("Error:", err);
        })
    }

    useEffect(() => {
        getBooklist();
        getReadList();
    }, []);

    // const items = [
    //     {
    //         id: 1,
    //         imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51k2g+1mSWL._SX329_BO1,204,203,200_.jpg",
    //         title: "The Alchemist",
    //         author: "Paulo Coelho"
    //     },

    //     {
    //         id: 2,
    //         imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41ARHyZ3FuL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    //         title: "The Vanishing Half",
    //         author: "Brit Bennett"
    //     }, 
    //     {
    //         id: 3,
    //         imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41nzI1lhIVL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    //         title: "The Promised Land",
    //         author: "Barack Obama"
    //     },

    //     {
    //         id: 4,
    //         imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41gVhoPaE5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    //         title: "Think Like a Monk",
    //         author: "Jay Shetty"
    //     }
    // ]
    return (
            <div>
                <NavBar disp = {"/profile"}/>

                <div className = {styles.myBooksPage}>

                    {items.length > 0 ? 
                        <div className = {styles.carouselDiv}>
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
                                                
                                                <MyBooksIndividual data = {item} key = {item.id}/>  
                                                    
                                            )
                                        })}
                            </Carousel>
                        </div>

                        :
                        null
                    }

                    <div className = {styles.booksNavigationLinks}>
                        <a href = "/listPages" className = {styles.allBooks}>
                            <p>All books</p>
                            <img className = {styles.arrow} src = "/assets/Vector13.png " alt = "Vector 13"/>
                        </a>
                    </div>


                    <div>
                        {links.map(item => {
                            return <ReadingListLinks userBookList = {bookList} readingList = {readList} link = {item}/>
                        })}
                    </div>

                </div>
                <Footer/>
            </div>
            
    )
}

export default MyBooks;