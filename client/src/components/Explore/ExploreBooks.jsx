import { useState, useEffect } from "react";
import axios from 'axios';
import styles from './explore.module.css';
import ExploreBookCategory from "./ExploreBookCategory";

const ExploreBooks = ({categories}) => {

    return (
        <div>
            {categories.map(item => {
               return (
                <div key = {item.id}>
                    <p className = {styles.bookCategory}>Best Selling in {item.category_name}</p>
                    <ExploreBookCategory category = {item._id}/>
                </div>
               )
            })}
        </div>
    )
}

export default ExploreBooks;