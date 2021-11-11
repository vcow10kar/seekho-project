import { useState, useEffect } from "react";
import axios from 'axios';
import ExploreItem from "./ExploreItem";
import Carousel from "react-elastic-carousel";
import ExploreAcademicBookItem from './ExploreAcademicBookItem';

const ExploreBookCategory = ({subject}) => {
    const [books, setBooks] = useState([]);

    const getBooks = () => {
        axios({
            method: "get",
            url: `http://localhost:5000/academicBook/subject/${subject}`,
        })
        .then(res => {
            setBooks([...res.data.books]);
        })
        .catch(err => {
            console.log("Error:", err);
        })
    }

    useEffect(() => {
        getBooks();
    }, []);
    return (
        <div>
            <Carousel 
                itemsToShow={2}
                showArrows={false}
                pagination={false}
            >
            {books.map(item => {
               return <ExploreAcademicBookItem key = {item.id} data = {item}/>
            })}
            </Carousel>
        </div>
    )
}

export default ExploreBookCategory;