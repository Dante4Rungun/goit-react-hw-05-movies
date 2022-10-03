import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "services/api";
import { Searchbar } from "components/Searchbar/Searchbar";
import { MovieList } from "components/MoviesList/MoviesList";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([])
    const movieName = searchParams.get("query") ?? "";

    const updateParams = (query) => {
        const nextParams = query !== "" ? { query } : {}
        setSearchParams(nextParams)
    }

    useEffect(() => {
        async function fetchSearch() {
            try {
                const fetchMovies = await api.fetchSearch(movieName)
                setMovies(fetchMovies)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchSearch()
    }, [movieName])

    return (
        <div>
            <Searchbar updateParams={updateParams} />
            <MovieList movies={movies} path=""/>
        </div>
    )
}

export default Movies