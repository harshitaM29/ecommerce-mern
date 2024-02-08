import { Fragment, useEffect, useState } from "react"
import useFetch from "./useFetch";
const CustomHook = () => {
   const data = useFetch('https://jsonplaceholder.typicode.com/todos')
    return (
        <Fragment>
            <ul>
            {data && data.map((item) => {
              return  <li key={item.id}>{item.title}</li>
            })}
            </ul>
        </Fragment>
    )
};

export default CustomHook;