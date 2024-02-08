import { Fragment, useState } from "react";
import Counter from "./Counter";
const CounterIncreaseHover = (props) => {
    const {count,increaseCount} = props;
    return (
        <Fragment>
        <p>Value of counter by click:{count}</p>
        <button onMouseOver={() => increaseCount()}>Increase Count </button>
        </Fragment>
    )
}
export default Counter(CounterIncreaseHover); 