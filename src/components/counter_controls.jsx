import React from "react";
import {useSelector,useDispatch} from "react-redux";

export const CounterControls = (props) => {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(props.inc);
    }
    const decrement = () => {
        dispatch(props.dec);
    }
    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

