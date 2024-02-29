import {FC, PropsWithChildren} from "react";
import {IMovieDetails} from "../../interfaces";

interface IProps extends PropsWithChildren {
    MovieDetails: IMovieDetails
}
const MovieDetails: FC<IProps> = ({MovieDetails}) => {
    const {id, imdb_id, title, genres, tagline, budget, production_countries, production_companies, runtime, release_date, original_language, vote_average, overview} = MovieDetails;
    return (
        <div className={'mini_block'}>
            <div>id: {id}</div>
            <div>imdb id: {imdb_id}</div>
            <div>title: {title}</div>
            <div>genres: {genres}</div>
            <div>tagline: {tagline}</div>
            <div>budget: {budget}</div>
            <div>production countries:[production_countries]</div>
            <div>production_companies:[production_companies]</div>
            <div>release date: {release_date}</div>
            <div>runtime: {runtime}</div>
            <div>original language: {original_language}</div>
            <div>vote: {vote_average}</div>
            <div>overview: {overview}</div>
        </div>
    );
};

export {MovieDetails};