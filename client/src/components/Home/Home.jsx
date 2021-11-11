import AcademicFields from "../Academics/AcademicFields";
import RecomCard from './RecomCard';
import Recommended from "./Recommended";
import {Resume} from "./Resume";
import { ResCard } from "./ResCard";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from  "./home.module.css";
import Carousel from "react-elastic-carousel";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import NavBar from "../Navbar/Navbar";
import { Footer } from '../Footer/Footer';

export default function Home() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [trending, setTrending] = useState([]);
    const [recommended, setRecommended] = useState([]);
    const [bookList, setBookList] = useState([]);
    const [bookListId, setBookListId] = useState("");
    const carouselRef = useRef();

    const getBooklist = () => {
        setBookListId(localStorage.getItem('userBookList'));
        
        axios({
            method: "get",
            url: `http://localhost:5000/userBookList/${bookListId}`,
        })
        .then(res => {
            setBookList(res.data.userBookList.book)
        })
        .catch(err => {
            console.log("Error:", err);
        }) 
        
    }

    useEffect(() => {
        getBooklist();
    }, []);

    return (
        <div className = {styles.homePage}>
            <NavBar disp = {"/profile"}/>

            <div className = {styles.mainContent}>
                <RecomCard/>

                {bookList ? 
                    <div>
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
                                // onChange={(currentItem) => setActiveItemIndex(currentItem.index)}
                            >
                                {bookList.map(item => {
                                    return (
                                        <Resume resumeId = {item._id} resumeColor = {'#fabdd1'} resumeLink = {item.coverImageUrl} resumeTag = {item.title} resumeAuthor = {item.author}/>     
                                    )
                                })}
                            </Carousel>
                        </div>
                    </div>

                : null}

            </div>
            <Footer/>
        </div>
    )
}