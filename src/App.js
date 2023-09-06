import React,{useState} from "react";
//add hook of react-redux
import {useSelector} from 'react-redux';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
export default function App() {
  
  //0.init appReducer
  //0.1 map appReducer in useSelector
  const appReducer = useSelector(({appReducer:appReducer})=>appReducer)

  return (
    <div style={{padding:10}}>
      {/*access function count in appReducer*/}
      <h1 >Codemobiles : {appReducer.count}</h1>
      <Box1/>
      <Box2/>
      <Box3/>
    </div>
  );
}
