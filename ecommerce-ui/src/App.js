import { Fragment, useMemo, useState } from "react";
import DemoList from "./components/OPtimization/DemoList";
function App() {
  const [title,setTitle] = useState('Old')
  const updateTitle = () => {
    setTitle('New Title');
  }
  const listItems = useMemo(() => [5,4,3,6,2],[])
  return (
    
    <Fragment>
    
     <DemoList items={listItems}/>
     <button onClick={updateTitle} >{title}</button>
  
   </Fragment>
  )
}

export default App;
