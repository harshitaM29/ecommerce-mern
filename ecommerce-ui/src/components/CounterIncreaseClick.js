import { Fragment, useState } from "react";
import Counter from "./Counter";

const CounterIncreaseClick = (props) => {
   
    const {count,increaseCount} = props
    return (
    <Fragment>
        <p>Value of counter by click:{count}</p>
        <button onClick={() => increaseCount()}>Increase Count </button>
        </Fragment>
    )
}

export default Counter(CounterIncreaseClick);