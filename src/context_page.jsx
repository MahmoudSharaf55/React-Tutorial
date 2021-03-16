import React, {Context} from "react";
import ReactDOM from "react-dom";
import {ThemeProvider, ThemeConsumer,themes} from "./context/context";

class ContextPage extends React.Component {
    constructor(props) {
        super(props);
        this.toggleContext = this.toggleContext.bind(this);
    }

    toggleContext() {
        this.setState(state=>({
            theme: state.theme === themes.dark
                ? themes.light
                : themes.dark,
        }));
    }

    render() {
        return (
            <ThemeProvider>
                <div>
                    <h1>Context with provider and consumer</h1>
                    <ThemeConsumer>
                        {
                            theme => {
                                console.log(theme);
                                return (
                                    <div style={{
                                        // backgroundColor: theme.background,
                                        // color: theme.foreground,
                                        width: "50px",
                                        height: "50px",
                                        margin: "15px",
                                    }}>
                                    </div>
                                );
                            }
                        }
                    </ThemeConsumer>
                    <button onClick={this.toggleContext}>
                        Toggle Context
                    </button>
                </div>
            </ThemeProvider>
        );
    }
}

export default ContextPage;