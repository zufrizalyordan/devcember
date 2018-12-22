import Config from '../config/env'

const getTrendingMovies = () => {
    return fetch(Config.TRENDING_URL)
        .then((response) => response.json())
        .catch(error => error)
}

const getMoviesByGenre = id => {
    return fetch(Config.POPULAR_URL + '&with_genres=' + id)
        .then((response) => response.json())
        .catch(error => error)
}


const getGenres = () => {
    return fetch(Config.GENRE_URL)
        .then((response) => response.json())
        .catch(error => error)
}

const getMovie = id => {
    return fetch(Config.MOVIE_URL + id +'?api_key='+ Config.API_KEY + '&append_to_response=videos')
        .then((response) => response.json())
        .catch(error => error)
}

export default {
    getTrendingMovies,
    getMovie,
    getGenres,
    getMoviesByGenre
}