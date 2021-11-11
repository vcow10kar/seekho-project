import { useState, useEffect } from "react";
import axios from 'axios';
import styles from './explore.module.css';
import ExploreSubjectBooks from "./ExploreSubjectBooks";

const ExploreAcademicBooks = ({subjects}) => {

    return (
        <div>
            {subjects.map(item => {
               return (
                <div key = {item.id}>
                    <p className = {styles.bookCategory}>Academic Books for {item.subject_name}</p>
                    <ExploreSubjectBooks subject = {item._id}/>
                </div>
               )
            })}
        </div>
    )
}

export default ExploreAcademicBooks;