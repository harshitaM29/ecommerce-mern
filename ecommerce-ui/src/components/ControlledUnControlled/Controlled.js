import { Fragment, useState } from "react"

const Controlled = () => {
    const [text,setText] = useState(null);
    return (
        <Fragment>
            <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        <p>{text}</p>
        </Fragment>
    )
}

export default Controlled