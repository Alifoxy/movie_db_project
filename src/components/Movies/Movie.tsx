import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import {IMovie} from "../../interfaces";
import {StarRatings} from "react-star-ratings";
import {render} from "@testing-library/react";


interface IProps extends PropsWithChildren {
    Movie:IMovie
    page:number
}
const Movie: FC<IProps> = ({Movie,page}) => {
    const {title, vote_average, poster_path} = Movie;
    const starRatings = (name) => {
        render() {
            // rating = 2;
            return (
                <StarRatings
                    rating={this.state.rating}
                    starRatedColor="blue"
                    changeRating={this.changeRating}
                    numberOfStars={6}
                    name='rating'
                />
            );
        }
    };
    const toDetails = () => {
        const mov_id = Movie.id;
        navigate(`${page}/details/${mov_id}`)
    };

    const navigate = useNavigate()
    return (
        <div className={'mini_block'}>
            <div className={'inner_movie_block'}>
                <div className={'mini_movie_title'}>{title}</div>
                <div>
                    <img  className={'main_poster'} src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={'poster'}/>
                </div>
                <StarRatings
                    rating={vote_average}
                    starRatedColor="orangered"
                    numberOfStars={10}
                    name='rating'
                />

                <div>vote: {vote_average}</div>
                <div>
                    <button onClick = {toDetails} className={'det_button'}>Details... </button>
                </div>
            </div>
        </div>
    );
};

export {Movie};