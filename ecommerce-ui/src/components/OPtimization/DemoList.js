import { Fragment } from "react"
import React from "react"
const DemoList = (props) => {
    const {items} = props;
    console.log('child running')
    return (
        <Fragment>
           
            <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
          
        </Fragment>
    )
}

export default React.memo(DemoList)