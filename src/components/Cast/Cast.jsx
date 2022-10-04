import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "services/api";
import styled from "./Cast.module.css"

const Cast = () => {
    const { id } = useParams()
    const [cast, setCast] = useState([])

    useEffect(() => {
        async function fetchCast() {
            try {
                const loadCast = await api.fetchCast(id)
                setCast(loadCast)
            }
            catch (err) {
                
            }
        }
        fetchCast()
    },[id])

    return (
        <ul className={styled.cast}>
            {cast.map(actor => (
                <li className={styled.cast__item}>
                    <img className={styled.cast__img} src={actor.profile_path === null ? 'https://us.123rf.com/450wm/glebstock/glebstock1507/glebstock150700212/42190907-silhouette.jpg?ver=6' :`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={`${actor.name} poster`} width="400" height="600"/>
                    <p className={styled.cast__name}>{actor.name}</p>
                    <p className={styled.cast__character}>Character: {actor.character}</p>
                </li>
            ))}
        </ul>
    )
}

export default Cast
//https://us.123rf.com/450wm/glebstock/glebstock1507/glebstock150700212/42190907-silhouette.jpg?ver=6