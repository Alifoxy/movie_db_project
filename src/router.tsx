import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, MovieDetailsPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies/:page'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>, children: [
                    {
                        path: ':page', element: <MoviesPage/>
                    }
                ]
            },
            {
                path: 'movies/details/:movie_id', element: <MovieDetailsPage/>
            },


        ]
    }
]);

export {
    router
}