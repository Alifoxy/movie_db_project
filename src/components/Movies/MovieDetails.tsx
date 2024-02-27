import {FC, PropsWithChildren} from "react";

import {IMovies} from "../../interfaces";

interface IProps extends PropsWithChildren {
    movieDetails: IMovies
}

const UserDetails: FC<IProps> = ({movieDetails}) => {
    const {id, name, username, email} = userDetails;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {UserDetails};