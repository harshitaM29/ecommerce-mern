import { useState } from "react"

const Counter = (Component) => {
    function NewCounter() 
    {
        const [count,setCount] = useState(0);
        return (
            <Component 
            count={count}
            increaseCount={() => setCount((count) => count + 1)}
            />
        )
    }
    return NewCounter;
}

export default Counter;