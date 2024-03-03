import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {ThemeSwitcher} from "../../hooks";


const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'search'}>Search</NavLink>
            <ThemeSwitcher/>
        </div>
    );
};

export {Header};