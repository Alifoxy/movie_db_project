import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import {IMovie} from "../../interfaces";
import {Posters} from "../Posters";


interface IProps extends PropsWithChildren {
    Movie:IMovie
    page:number
}
const Movie: FC<IProps> = ({Movie,page}) => {
    const {title, vote_average,} = Movie;

    const movie_id = Movie.id

    const toDetails = () => {
        const mov_id = Movie.id;
        navigate(`${page}/details/${mov_id}`)
    };

    const navigate = useNavigate()
    return (
        <div className={'mini_block'}>
            <div>{title}</div>
            <div className={'poster_div'}><Posters movieID={movie_id}/></div>
            <div>vote: {vote_average}</div>
            <div>
                <button onClick = {toDetails} className={'button'}>Details... </button>
            </div>

        </div>
    );
};

export {Movie};