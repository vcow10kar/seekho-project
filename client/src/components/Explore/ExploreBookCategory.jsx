import { useState, useEffect } from "react";
import axios from 'axios';
import ExploreItem from "./ExploreItem";
import Carousel from "react-elastic-carousel";

const ExploreBookCategory = ({category}) => {
    const [books, setBooks] = useState([]);

    const getBooks = () => {
        axios({
            method: "get",
            url: `http://localhost:5000/books/category/${category}`,
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
               return <ExploreItem key = {item.id} data = {item}/>
            })}
            </Carousel>
        </div>
    )
}

export default ExploreBookCategory;