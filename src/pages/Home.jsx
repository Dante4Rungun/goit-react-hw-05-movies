import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "services/api";
import { MovieList } from "components/MoviesList/MoviesList";
import styled from './Home.module.css'

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchFilms() {
            try {
                const fetchedMovies = await api.fetchFilms('trending/movie', 'day', 1)
                setMovies(fetchedMovies)
            }
            catch (err)
            {
                console.log(Error)
            }
            finally {
                console.log('success')
            }           
        }
        fetchFilms()
    }, [])
    
    return (
        <div className={styled.home}>
            <h1 className={styled.title}>Trending today</h1>
            <MovieList movies={movies} path="movies/"/>
        </div>
    )
}

export default Home