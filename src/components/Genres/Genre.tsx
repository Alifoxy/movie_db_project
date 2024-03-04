import React, {FC, PropsWithChildren} from "react";
import {IGenre} from "../../interfaces";

interface IProps extends PropsWithChildren {
    SetGenre:IGenre

}
const Genre: FC<IProps> = ({SetGenre}) => {
    const {name:genre_name} = SetGenre;


    return (
        <div className={'genre_item'}>
            {genre_name}
        </div>
    );
};

export {Genre};