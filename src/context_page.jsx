import React, {Context, useContext, useState} from "react";
import ReactDOM from "react-dom";
import {ThemeContext, themes} from "./context/theme_context";

const ContextPage = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const toggleContext = () => {
        setTheme((prevTheme) => {
            return prevTheme === themes.dark ? themes.light : themes.dark;
        });
    }
    return (
        <div>
            <h1>Context with provider and consumer</h1>
            <h3>Theme is: {theme.name}</h3>
            <div style={{margin: 20,width: 50, height: 50, background: theme.background}}>
            </div>
            <button onClick={toggleContext}>
                Toggle Context
            </button>
        </div>
    );

}

export default ContextPage;