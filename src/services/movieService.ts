import {IRes} from "../types";
import {IMovieDetails, IMovies} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {

    getAll: (page:string='1'): IRes<IMovies> => apiService.get(urls.movies.movies_list,{params: {page:page}}),
    getById: (movie_id: number): IRes<IMovieDetails> => apiService.get(urls.movies.byId(movie_id))
}

export {
    movieService
}