// const baseUrl = 'https://'
const baseUrl = "https://api.themoviedb.org/3/"
const api_key = 'xxxxxxxxxxxxx'

const envs = {
    API_KEY: api_key,
    TRENDING_URL: baseUrl + 'trending/movie/day?api_key=' + api_key,
    POPULAR_URL: baseUrl + 'discover/movie?sort_by=popularity.asc&api_key=' + api_key,
    GENRE_URL: baseUrl + "genre/movie/list?api_key="+api_key+"&language=en-US",
    MOVIE_URL: baseUrl + 'movie/',
}

export default envs