import React, {useState, createContext} from "react";

export const themes = {
    light: {
        name: "Light",
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        name: "Dark",
        foreground: '#ffffff',
        background: '#222222',
    },
};
export const ThemeContext = createContext();

export const ThemeProvider = props => {
    const [theme, setTheme] = useState(themes.light);
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}