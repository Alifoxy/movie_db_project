import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, MovieDetailsPage, GenresPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies/1'}/>
            },
            {
                path: 'movies', element: <MoviesPage/> , children: [
                    {
                        path: ':page',element: <MoviesPage/>
                    },
                    {
                        path: 'genres',element: <GenresPage/>
                    }
                ]
            },
            {
                path: 'movies/:page/details/:movie_id', element: <MovieDetailsPage/>
            },


        ]
    }
]);

export {
    router
}