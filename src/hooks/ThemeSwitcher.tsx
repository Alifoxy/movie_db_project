import { useThemeSwitcher } from 'react-css-theme-switcher';
import {useState} from "react";

const ThemeSwitcher = () => {
    const { switcher, themes, currentTheme, status } = useThemeSwitcher();
    const [isDarkMode,setIsDarkMode] = useState({previous:false});

    if (status === 'loading') {
        return <div>Loading styles...</div>;
    }

    const toggleDarkMode = () => {
        const previous = isDarkMode.previous
        setIsDarkMode(previous => {
            switcher({ theme: previous ? themes.light : themes.dark });
            return !previous;
        });
    };


    return (
        <div>
            <h2>Current theme: {currentTheme}</h2>
            <button onClick={toggleDarkMode} className={'button'}/>
        </div>
    );
};

export {ThemeSwitcher}