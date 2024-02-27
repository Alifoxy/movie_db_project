import {IRes} from "../types";
import {IMovie, IMovies} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll: (page:string|undefined = '1'): IRes<IMovies> => apiService.get(urls.movie.base,{params: {page}}),
    getById: (id: number): IRes<IMovie> => apiService.get(urls.movie.byId(id))
}

export {
    movieService
}