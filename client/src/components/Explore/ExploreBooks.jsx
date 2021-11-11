import { useState, useEffect } from "react";
import axios from 'axios';
import styles from './explore.module.css';
import ExploreBookCategory from "./ExploreBookCategory";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const ExploreBooks = ({categories}) => {

    return (
        <div>
            {categories.map(item => {
               return (
                <div key = {item.id}>
                    <div className = {styles.exploreCategoriesDiv}>
                        <p className = {styles.bookCategory}>Best Selling in {item.category_name}</p>
                        <SwapHorizIcon/>
                    </div>
                    <ExploreBookCategory category = {item._id}/>
                </div>
               )
            })}
        </div>
    )
}

export default ExploreBooks;