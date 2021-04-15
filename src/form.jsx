import React from "react";
import {Transition} from 'react-transition-group';

const defaultStyle = {
    transition: `opacity 300ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: {opacity: 1},
    entered: {opacity: 1},
    exiting: {opacity: 0},
    exited: {opacity: 0},
};

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            description: "my name is sharaf",
            myCar: 'Fiat',
            error: undefined,
            items: ['Mahmoud', 'Ahmed'],
        };
        this.descRef = React.createRef();
    }

    changeField = (ev) => {
        this.state[ev.target['name']] = ev.target.value;
        this.setState({});
    }
    onSelectChange = (ev) => {
        console.log(ev.target.selected);
        // this.setState({});
    }

    submitForm = (ev) => {
        ev.preventDefault();
        let name = ev.target['name'].value;
        let age = ev.target['age'].value;
        if (name === '') {
            this.state.error = <strong>enter your name</strong>;
            this.setState({});
            return;
        } else {
            this.state.name = name;
        }
        if (!Number(age)) {
            this.state.error = <strong>enter your age</strong>;
            this.setState({});
            return;
        } else {
            this.state.age = age;
        }
        this.state.error = undefined;
        // alert(this.state.name + ' - ' + this.state.age + " - " + this.descRef.current.value);
        this.setState({});
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <p>your name: {this.state.name}</p>
                <input
                    type="text"
                    name='name'
                    onChange={this.changeField}
                />
                <p>your age: {this.state.age}</p>
                <input
                    type='number'
                    name='age'
                    onChange={this.changeField}
                />
                <br/>
                <br/>
                <textarea ref={this.descRef}/>
                <br/>
                <select defaultValue={this.state.myCar} onChange={this.state.onSelectChange}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
                <br/>
                <br/>
                {this.state.error}
                <br/>
                <br/>
                <button type="submit">Submit</button>
                <br/>
                {this.items}
                {/*<Transition in={this.props.inPop} timeout='300'>*/}
                {/*    {state => (*/}
                {/*        <div style={{*/}
                {/*            ...defaultStyle,*/}
                {/*            ...transitionStyles[state]*/}
                {/*        }}>*/}
                {/*            {this.items}*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</Transition>*/}
            </form>
        );
    }
}

export default MyForm;