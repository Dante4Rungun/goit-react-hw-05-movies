import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/"
const API_KEY = 'de9b46869023b8f92c21ca747a043c5f'

export const fetchFilms = async (type, searchQuery,page) => {
  const response = await axios.get(`${type}/${searchQuery}?api_key=${API_KEY}&page=${page}`)
  if (type === 'movie') {
    return response.data
  }
  else {
    return response.data.results
  }   
}

export const fetchCast = async (id) => {
  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`)
  return response.data.cast
}

export const fetchReviews = async (id) => {
  const response = await axios.get(`movie/${id}/reviews?api_key=de9b46869023b8f92c21ca747a043c5f&language=en-US&page=1`)
  return response.data.results
}

export const fetchSearch = async (query) => {
  const response = await axios.get(`search/movie?api_key=de9b46869023b8f92c21ca747a043c5f&language=en-US&query=${query}&page=1&include_adult=false`)
  return response.data.results
}

const api = {
  fetchFilms,
  fetchCast,
  fetchReviews,
  fetchSearch
}
export default api

//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=de9b46869023b8f92c21ca747a043c5f&language=en-US&page=1
//Cast
//https://api.themoviedb.org/3/movie/642885/credits?api_key=de9b46869023b8f92c21ca747a043c5f
//console.log(fetchFilms('trending/movie','week',2))
//search need movie to show details
//https://api.themoviedb.org/3/movie/718930?api_key=de9b46869023b8f92c21ca747a043c5f&language=en-US
//https://api.themoviedb.org/3/movie/828558?api_key=de9b46869023b8f92c21ca747a043c5f&language=en-US
//trends
//https://api.themoviedb.org/3/trending/movie/week?api_key=de9b46869023b8f92c21ca747a043c5f
//search by query
//https://api.themoviedb.org/3/search/movie?api_key=de9b46869023b8f92c21ca747a043c5f&language=en-US&query=batman&page=1&include_adult=false
