import React from "react";
import styled from "./MovieDetailsInfo.module.css"
import api from "services/api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const MovieDetailsInfo = () => {
    const { id } = useParams()
    const [poster, setPoster] = useState('')
    const [ title, setTitle ] = useState('')
    const [ vote, setVote ] = useState(0)
    const [ overview, setOverview ] = useState('')
    const [ genres, setGenres] = useState([])

    useEffect(() => {
        async function fetchDetails() {
            const movieInfo = await api.fetchFilms('movie', `${id}`, 1) 
            setPoster(movieInfo.poster_path)
            setTitle(movieInfo.title)
            setVote(movieInfo.vote_average)
            setOverview(movieInfo.overview)
            setGenres(movieInfo.genres)
        }  
        fetchDetails() 
    }, [id])
    
    return (
        <div className={styled.details}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={`${title} poster`} />
            <div className={styled.details__info}>
                <h2 className={styled.details__header}>{title}</h2>
                <p className={styled.details__text}>User Score: {Math.round(vote * 10)}%</p>
                <p className={styled.details__titles}>Overview</p>
                <p className={styled.details__text}>{overview}</p>
                <p className={styled.details__titles}>Genres</p>
                <ul className={styled.details__genresList}>
                    {genres.map(genre => (
                        <li className={styled.details__genresItem}>
                            <p className={styled.details__text}>{genre.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

//<img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={`${title} poster`} />