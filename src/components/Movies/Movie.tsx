import {FC, PropsWithChildren} from "react";

import {IMovie} from "../../interfaces";

interface IProps extends PropsWithChildren {
    Movie: IMovie
}

const Movie: FC<IProps> = ({Movie}) => {
    const {id, title, vote_average,} = Movie;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>vote: {vote_average}</div>
        </div>
    );
};

export {Movie};