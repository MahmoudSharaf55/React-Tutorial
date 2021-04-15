import React from "react";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {CounterControls} from './components/counter_controls';

// Action => functions used in dispatch
const increment = () => {
    return {
        type: "increment",
    }
}
const decrement = () => {
    return {
        type: "decrement",
    }
}
// Reducer => change state from --- to --- when dispatch
const counter = (state = 0, action) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
    }
}
// Store => storing Global state
let store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // or combineReducers for more than one reducer

store.subscribe(() => {
    console.log(`Subscribe: ${store.getState()}`);
})
// Dispatch
// store.dispatch(increment());

export const ReduxPage = () => {
    return (
        <Provider store={store}>
            <div>
                <h2>Redux Page</h2>
                <CounterControls inc={increment()} dec={decrement()}>

                </CounterControls>
            </div>
        </Provider>
    );
}