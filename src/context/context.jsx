import React from "react";

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};
const {Provider, Consumer} = React.createContext(undefined);

class ThemeProvider extends React.Component {
    this.state = {
        theme: themes.dark
    };

    render() {
        return <Provider value={this.theme}>{this.props.children}</Provider>;
    }
}

export {ThemeProvider,themes, Consumer as ThemeConsumer};