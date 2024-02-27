import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IMovies} from "../../interfaces";
import {movieService} from "../../services";
import {Movie} from "./Movie";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const Movies: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovies[]>([])
    const [query, setQuery] = useSearchParams({page: '1'||undefined});
    const [prevNext, setPrevNext] = useState({prev:0,  total_pages:0})

    const page:string|undefined = () => {
        const setPage = query.get('page');
        const setPage:string|undefined;

    }



    useEffect(() => {
        movieService.getAll(page).then(({data}) => {
            setMovies(data.results)
            setPrevNext({prev: data.page, total_pages: data.total_pages})
        })
    }, [page])

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }

    return (
        <div>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            <div className={'pagination_block'}>
                <button disabled={!prevNext.prev} onClick={prev} className={'button'}>prev</button>
                <button disabled={prevNext.prev === prevNext.total_pages} onClick={next} className={'button'}>next</button>
            </div>
        </div>
    );
};

export {Movies};