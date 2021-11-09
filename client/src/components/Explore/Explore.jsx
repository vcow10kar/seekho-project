import styles from './explore.module.css';
import AcademicFields from "../Academics/AcademicFields";
import ExploreCarousel from "./ExploreCarousel";
import ExploreBooks from "./ExploreBooks";
import { useState, useEffect } from "react";
import axios from 'axios';


export default function Explore() {
    const [categories, setCategories] = useState([]);

    const getAllCategories = () => {
        axios({
            method: "get",
            url: "http://localhost:5000/category"
        })
        .then(res => {
            setCategories([...res.data.category]);
        })
        .catch(err => {
            console.log("Error:", err);
        })
    }

    useEffect(() => {
        getAllCategories();
    }, []);
    return (
        <div className = {styles.explorePage}>
            <p>EXPLORE PAGE!</p>
            <ExploreCarousel/>
            <ExploreBooks categories = {categories}/>
            <AcademicFields />
        </div>
    )
}