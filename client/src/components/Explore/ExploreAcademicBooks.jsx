import { useState, useEffect } from "react";
import axios from 'axios';
import styles from './explore.module.css';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ExploreSubjectBooks from "./ExploreSubjectBooks";

const ExploreAcademicBooks = ({subjects}) => {

    return (
        <div>
            {subjects.map(item => {
               return (
                <div key = {item.id} style = {{marginBottom: '18px'}}>
                    <div className = {styles.exploreCategoriesDiv}>
                        <p className = {styles.bookCategory}>Academic Books for {item.subject_name}</p>
                        <SwapHorizIcon/>
                    </div>
                    <ExploreSubjectBooks subject = {item._id}/>
                </div>
               )
            })}
        </div>
    )
}

export default ExploreAcademicBooks;