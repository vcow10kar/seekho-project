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
import ExploreBooks from "../Explore/ExploreBooks";
import ExploreItem from '../Explore/ExploreItem';
import HomeExplore from './HomeExplore';

export default function Home() {
    const carouselRef = useRef();
    const [bookList, setBookList] = useState([]);
    const [readingList, setReadingList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [subjects, setSubjects] = useState([]);
    // const [recommended, setR]

    const getAllCategories = () => {
        axios({
            method: "get",
            url: "http://localhost:5000/category"
        })
        .then(res => {
            console.log("User not logged in");
            setCategories([...res.data.category]);
        })
        .catch(err => {
            console.log("Error:", err);
        })
    }

    const getAllSubjects = () => {
        axios({
            method: "get",
            url: "http://localhost:5000/subject"
        })
        .then(res => {
            //console.log(res.data.subjects);
            setSubjects([...res.data.subjects]);
        })
        .catch(err => {
            console.log("Error:", err);
        })
    }
    

    // const getBooks = () => {

    // }

    const getBooklist = () => {
        //console.log("Getting Book List...")
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
        //console.log("Getting Reading List...")
        let readListId = localStorage.getItem('readingList');
        axios({
            method: "get",
            url: `http://localhost:5000/readingList/${readListId}`,
        })
        .then(res => {
            let data = res.data.readingList.book;
            console.log("Reading List:", data);
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
            localStorage.setItem('signIn', true);
            
            getBooklist();
            getReadlist();
        })
        .catch(err => {
            console.log("Not properly authenticated!");
            console.log("Error", err);
        })

    }

    const checkSignIn = () => {
        if(localStorage.getItem('signIn') === 'true') {

            if(bookList.length > 0 || readingList.length > 0) {
                let cats = {};

                // console.log("User Book List", bookList);

                let bookCat = bookList.map(item => {
                        return item["category"];
                })

                let readCat = readingList.map(item => {
                        return item["category"];
                })

                bookCat.map(item => {
                    console.log(item);
                    if(readCat.indexOf(item) === -1) {
                        cats[item["category_name"]] = item;
                    }
                })

                readCat.map(item => {
                    console.log(item);
                    if(bookCat.indexOf(item) === -1) {
                        cats[item["category_name"]] = item;
                    }
                })

                let arr = Object.values(cats);

                if(arr.length > 0) {
                    setCategories(arr);
                }
            } else {
                getAllCategories();
            }

            

            

            
            // console.log("CATS", categories);
        } else {
            getAllCategories();
        }
    }

    useEffect(() => {
        
        if(localStorage.getItem('googleLogin') === 'true') {
            //console.log("Before fetching...")
            fetchUser();
            localStorage.removeItem('googleLogin');
        } else if (localStorage.getItem('signIn') === 'true'){
            getBooklist();
            getReadlist();
        }
        
    }, []);

    useEffect(() => {
        checkSignIn();
        // getAllCategories();
        // getAllSubjects();
    }, [bookList, readingList]);

    return (
        <div className = {styles.homePage}>
            <NavBar disp = {"/profile"}/>

            <div className = {styles.mainContent}>

                {readingList.length > 0 ? 
                    <div className = {styles.userReadList}>
                        <div className = {styles.exploreCategoriesDiv}>
                            <p className = {styles.resumeReadingTitle}>Start Reading</p>
                            <SwapHorizIcon/>
                        </div>

                        <div className = {styles.carouselParent}>
                            <Carousel
                                ref={carouselRef}
                                itemsToShow={2}
                                showArrows={false}
                                pagination={false}
                                initialActiveIndex={0}
                                className = {styles.resumeReadingCarousel}
                                // onChange={(currentItem) => setActiveItemIndex(currentItem.index)}
                            >
                                {readingList.map(item => {
                                    return (
                                        <ExploreItem key = {item._id} data = {item}/>
                                    )
                                })}
                            </Carousel>
                        </div>
                    </div>

                : null}

                {bookList.length > 0 ? 
                    <div className = {styles.userBookList}>
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

                <HomeExplore categories = {categories}/>
            </div>
            <Footer/>
        </div>
    )
}