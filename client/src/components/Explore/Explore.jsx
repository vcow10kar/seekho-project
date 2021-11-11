import styles from './explore.module.css';
import AcademicFields from "../Academics/AcademicFields";
import ExploreCarousel from "./ExploreCarousel";
import ExploreBooks from "./ExploreBooks";
import ExploreAcademicBooks from './ExploreAcademicBooks';
import { useState, useEffect } from "react";
import axios from 'axios';


export default function Explore() {
    const [categories, setCategories] = useState([]);
    const [subjects, setSubjects] = useState([]);

    const getAllCategories = () => {
        axios({
            method: "get",
            url: "http://localhost:5000/category"
        })
        .then(res => {
            //console.log(res.data.category);
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

    useEffect(() => {
        getAllCategories();
        getAllSubjects();
    }, []);
    return (
        <div className = {styles.explorePage}>
            <p>EXPLORE PAGE!</p>
            <ExploreCarousel/>
            <ExploreBooks categories = {categories}/>
            <hr/>
            <h2>Academic Books Section</h2>
            <hr/>
            <ExploreAcademicBooks subjects = {subjects}/>
            <AcademicFields />
        </div>
    )
}