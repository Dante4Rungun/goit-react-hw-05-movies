import React from "react";
import { Suspense } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from './MovieDetails.module.css'
import { MovieDetailsInfo } from "components/MovieDetailsInfo/MovieDetailsInfo";
import { useEffect } from "react";
import { useState } from "react";

const MovieDetails = () => {
    const location = useLocation();
    const [from, setFrom] = useState('')

    useEffect(() => {
        console.log(location)
        if (location.pathname.includes('/cast') || location.pathname.includes('/reviews'))
        {
            setFrom(prevFrom => prevFrom)
        }
        else {
            setFrom(location.state.from)
        }
            
    },[location])

    return (
        <div className={styled.details}>
            <Link to={from}>Go back</Link>
            <MovieDetailsInfo />
            <ul className={styled.addinfo}>
                <li className={styled.addinfo__item}>
                    <Link to="cast">Cast</Link>
                </li>
                <li className={styled.addinfo__item}>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet/>
            </Suspense>
        </div>
    )
}

export default MovieDetails