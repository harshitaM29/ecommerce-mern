import { Fragment, useRef, useState } from "react";

const UnControlled = () => {
   const inputRef = useRef()
   const handleSubmit = (e) => {
  
    alert(inputRef.current.value)
    e.preventDefault();
   }
    return (
        <Fragment>
            <form onSubmit={handleSubmit} >
            <input type = 'text'
            ref ={inputRef}
            />
            
            <button type="submit">Submit</button>
           
            </form >
        </Fragment>
    )
};

export default UnControlled;