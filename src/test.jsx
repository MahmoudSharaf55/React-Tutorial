import React, {Suspense} from "react";
import ReactDOM from "react-dom";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
        };
    }

    changeColor = (c) => {
        this.setState({color: c});
    }

    findDomNodeHandler1() {
        const myDiv = document.getElementById('myDivOne');
        ReactDOM.findDOMNode(myDiv).style.color = myDiv.style.color === 'blue' ? 'red' : 'blue';
    }

    render() {
        return (
            <Suspense fallback={<div>Loading... </div>}>
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
                </div>
            </Suspense>
        );
    }
}

export {Test as default};