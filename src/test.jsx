import React from "react";
import Context from 'react';
import ReactDOM from "react-dom";

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

const myContext = React.createContext(themes.dark);

class Test extends React.Component {
    constructor(props) {
        super(props);
        Test.contextType = myContext;
        this.toggleContext = this.toggleContext.bind(this);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
            theme: themes.dark,
        };
    }

    changeColor = (c) => {
        this.setState({color: c});
    }

    findDomNodeHandler1() {
        const myDiv = document.getElementById('myDivOne');
        ReactDOM.findDOMNode(myDiv).style.color = myDiv.style.color === 'blue' ? 'red' : 'blue';
    }

    toggleContext() {
        console.log('toggled');
        this.setState(state => ({
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }));
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeColor.bind(this, 'Green')}
                >Change color
                </button>
                <button onClick={this.findDomNodeHandler1}>FIND_DOM_NODE1</button>
                <h3 id="myDivOne">JTP-NODE1</h3>
                <br/>
                <myContext.Provider value={this.state.theme}>
                    <button style={{backgroundColor: this.context.background, color: this.context.foreground}}
                            onClick={this.toggleContext}>Toggle Context Provider
                    </button>
                </myContext.Provider>
                <button style={{backgroundColor: this.context.background, color: this.context.foreground}}
                        onClick={this.toggleContext}>Toggle Context
                </button>
            </div>
        );
    }
}

export default Test;