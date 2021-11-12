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
    const [bookList, setBookList] = useState([]);
    const [readingList, setReadingList] = useState([]);
    // const [bookListId, setBookListId] = useState(localStorage.getItem('userBookList'));
    // const [readListId, setReadListId] = useState(localStorage.getItem('readingList'));
    
    // cont [books, set]
    const carouselRef = useRef();

    const handle = (data) => {
        setBookList(data);
    }

    const getBooks = () => {

    }

    const getBooklist = () => {
        console.log("Getting Book List...")
        let bookListId = localStorage.getItem('userBookList');

        axios({
            method: "get",
            url: `http://localhost:5000/userBookList/${bookListId}`,
        })
        .then(res => {
            let data = res.data.userBookList.book;
            setBookList(data);
        })
        .catch(err => {
            console.log("Error:", err);
        }) 
        
    }

    const getReadlist = () => {
        console.log("Getting Reading List...")
        let readListId = localStorage.getItem('readingList');
        axios({
            method: "get",
            url: `http://localhost:5000/readingList/${readListId}`,
        })
        .then(res => {
            let data = res.data.readingList.book;
            setReadingList(data);
        })
        .catch(err => {
            console.log("Error:", err);
        }) 
        
    }

    const fetchUser = () => {
        axios
        .get("http://localhost:5000/getuser", {withCredentials: true})
        .then(res => {

            console.log(res.data);

            let temp = {
                token: res.data.token,
                userBookList: res.data.userBookList,
                readingList: res.data.readingList
            }

            // if(res.data.token === undefined && res.data.userBookList === undefined && res.data.readingList === undefined ) {
            //     goToGoogle();
            // }

            

            //timer = null;
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userBookList', res.data.userBookList);
            localStorage.setItem('readingList', res.data.readingList);
            localStorage.setItem('userId', res.data.userid);
            
            getBooklist();
            getReadlist();
        })
        .catch(err => {
            console.log("Not properly authenticated!");
            console.log("Error", err);
        })

    }

    useEffect(() => {
        
        if(localStorage.getItem('googleLogin') === 'true') {
            console.log("Before fetching...")
            fetchUser();
            localStorage.removeItem('googleLogin');
        }
    }, []);

    // useEffect(() => {
    //     getBooklist();
    //     getReadlist();
    // }, [bookListId, readListId]);

    return (
        <div className = {styles.homePage}>
            <NavBar disp = {"/profile"}/>

            <div className = {styles.mainContent}>
                <RecomCard/>

                {bookList.length > 0 ? 
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
                                        <Resume className = {styles.div} key = {item._id} resumeId = {item._id} resumeColor = {'#fabdd1'} resumeLink = {item.coverImageUrl} resumeTag = {item.title} resumeAuthor = {item.author}/>     
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