import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {router} from "./router";
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import  '../src/components/Style/light_theme.css'
import  '../src/components/Style/dark_theme.css'
import {ThemeSwitcher} from "./hooks";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const themes = {
    light: '../src/components/Style/light_theme.css',
    dark: '../src/components/Style/dark_theme.css',
};
root.render(
    <ThemeSwitcherProvider  defaultTheme="light" themeMap={themes}>
        <ThemeSwitcher/>
        <RouterProvider router={router}/>
    </ThemeSwitcherProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
