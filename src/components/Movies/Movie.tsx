import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import {IMovie} from "../../interfaces";

interface IProps extends PropsWithChildren {
    Movie:IMovie
}

const Movie: FC<IProps> = ({Movie}) => {
    const {id, title, vote_average,} = Movie;

    const toDetails = () => {
        const movie_id = Movie.id;
        navigate(`details/${movie_id}`)
    };

    const navigate = useNavigate()
    return (
        <div className={'mini_block'}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>vote: {vote_average}</div>
            <button onClick = {toDetails} className={'button'}>Details... </button>
        </div>
    );
};

export {Movie};