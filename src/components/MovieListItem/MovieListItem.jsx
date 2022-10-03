import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from './MovieListItem.module.css'


export const MovieListItem = ({ poster, title, id, path }) => {
    const location = useLocation();
    return (
        <li className={styled.movieList__item} key={id}>
            <Link to={`${path}${id}`} state={{from: location}}>
                <img className={styled.movieList__img} src={poster} alt={`${title} poster`} />
                <p className={styled.movieList__title}>{title}</p>
            </Link>
        </li>
    )
}