import {IRes} from "../types";
import {IMovie, IMovies} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll: (page = 1): IRes<IMovies> => apiService.get(urls.movies.movie_list,{params: {page:page}}),
    getById: (id: number): IRes<IMovie> => apiService.get(urls.movies.byId(id))
}

export {
    movieService
}