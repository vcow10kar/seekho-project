import AcademicFields from "../Academics/AcademicFields";
import RecomCard from './RecomCard';
import Recommended from "./Recommended";
import {Resume} from "./Resume";
import { ResCard } from "./ResCard";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./home.module.css";
import styles from  "./home.module.css";
import Carousel from "react-elastic-carousel";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import NavBar from "../Navbar/Navbar";

export default function Home() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [trending, setTrending] = useState([]);
    const [recommended, setRecommended] = useState([]);
    const [bookList, setBookList] = useState([]);
    const carouselRef = useRef();

    const getBooklist = () => {
        let bookListId = localStorage.getItem('userBookList');

        console.log(bookListId);

        if(!bookListId) {
            window.location.pathname = '/signIn';
        } else {
            axios({
                method: "get",
                url: `http://localhost:5000/userBookList/${bookListId}`,
            })
            .then(res => {
                console.log(res.data.userBookList);
                setBookList(res.data.userBookList.book)
            })
            .catch(err => {
                console.log("Error:", err);
            }) 
        }
    }

    useEffect(() => {
        getBooklist();
    }, []);

    return (
        <div>
            <NavBar/>
            <RecomCard/>

            <div className = {styles.exploreCategoriesDiv}>
                <p className = {styles.resumeReadingTitle}>Resume Reading</p>
                <SwapHorizIcon/>
            </div>

            <div className = {styles.carouselParent}>
                <Carousel
                        ref={carouselRef}
                        itemsToShow={1}
                        showArrows={false}
                        pagination={false}
                        initialActiveIndex={1}
                        className = {styles.resumeReadingCarousel}
                        onChange={(currentItem) => setActiveItemIndex(currentItem.index)}
                    >
                        {bookList.map(item => {
                                    return (
                                        
                                        <Resume resumeId = {item._id} resumeColor = {'#fabdd1'} resumeLink = {item.coverImageUrl} resumeTag = {item.title} resumeAuthor = {item.author}/> 
                                            
                                    )
                                })}
                    </Carousel>
            </div>
        </div>
    )
}