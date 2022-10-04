import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "./Reviews.module.css"
import api from "services/api";

const Reviews = () => {
    const { id } = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function fetchReviews() {
            try {
                const loadReviews = await api.fetchReviews(id)
                setReviews(loadReviews)
            }
            catch (err) {
                
            }
        }
        fetchReviews()
    }, [id])
    
    return (
        <ul className={styled.review}>
            {reviews.map(review => (
                <li className={styled.review__item}>
                    <p className={styled.review__author}>{review.author}</p>
                    <p className={styled.review__content}>{review.content}</p>
               </li>
           ))} 
        </ul>
    )
}

export default Reviews