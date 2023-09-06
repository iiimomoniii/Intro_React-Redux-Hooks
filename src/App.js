import React,{useState} from "react";
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
export default function App() {
  //0.
 const [count, setCount] = useState(0);
  return (
    <div style={{padding:10}}>
      {/*add function for count on title*/}
      <h1 onClick={()=>{setCount(count+1)}}>Codemobiles : {count}</h1>
      <Box1/>
      <Box2/>
      <Box3/>
    </div>
  );
}
