import {FC, PropsWithChildren} from "react";
import {IMovieDetails} from "../../interfaces";

interface IProps extends PropsWithChildren {
    MovieDetails: IMovieDetails
}
const MovieDetails: FC<IProps> = ({MovieDetails}) => {
    const {id, imdb_id, title, tagline, budget, runtime, release_date, original_language, vote_average, overview} = MovieDetails;

    const genre_name = MovieDetails.genres.map(function(genre) {
        return genre.name;
    });
    const country_name = MovieDetails.production_countries.map(function(country) {
        return country.name;
    });
    const company_name = MovieDetails.production_companies.map(function(company) {
        return company.name;
    });

    return (
        <div className={'mini_block'}>
            <div>id: {id}</div>
            <div>imdb id: {imdb_id}</div>
            <div>title: {title}</div>
            <div>genres:{genre_name}</div>
            <div>tagline: {tagline}</div>
            <div>budget: {budget}</div>
            <div>production countries:{country_name}</div>
            <div>production_companies:{company_name}</div>
            <div>release date: {release_date}</div>
            <div>runtime: {runtime}</div>
            <div>original language: {original_language}</div>
            <div>vote: {vote_average}</div>
            <div>overview: {overview}</div>
        </div>
    );
};

export {MovieDetails};