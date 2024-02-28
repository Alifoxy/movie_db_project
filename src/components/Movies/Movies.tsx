import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {Movie} from "./Movie";
import {useSearchParams} from "react-router-dom";
// import {useDispatch} from "react-redux";

interface IProps extends PropsWithChildren {
}

const Movies: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [getPage, setGetPage] = useSearchParams({page:'1'});
    const [totalPages, setTotalPages] = useState({total_pages:0});
    const [currentPage, setCurrentPage] = useState({current_page:1});

    const setPage = getPage.get('page')

    useEffect(() => {
        movieService.getAll(setPage).then(({data}) => {
            setMovies(data.results)
            setCurrentPage({current_page:data.page})
            setTotalPages({total_pages: data.total_pages})
        })
    }, [setPage])

    const prev = () => {
        // setGetPage(current_page => {
        //     (currentPage.current_page = current_page.page - 1)
        //     return current_page
        // })
        setGetPage(getPage => ({page: +getPage.get('page') - 1}))
    }

    const next = () => {
        setGetPage(current_page => {
            (currentPage.current_page = current_page.page + 1)
            return current_page
        })
    }

    return (
        <div>
            {movies.map(movie => <Movie key={movie.id} Movie={movie}/>)}
            <div className={'pagination_block'}>
                <button disabled={currentPage.current_page === 1} onClick={prev} className={'button'}>prev</button>
                <button disabled={currentPage.current_page === totalPages.total_pages} onClick={next} className={'button'}>next</button>
            </div>
        </div>
    );
};

export {Movies};