import React from "react";
import styled from './MoviesList.module.css'
import { MovieListItem } from "components/MovieListItem/MovieListItem";

export const MovieList = ({movies, path}) => {
    return (
        <ul className={styled.movieList}>
            {movies.map(movie => (
                <MovieListItem
                    poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    title={movie.title}
                    id={movie.id}
                    path={path}
                />
            ))}
        </ul>
    )
}