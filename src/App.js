import React,{useState} from "react";
//add hook of react-redux
import {useSelector, useDispatch} from 'react-redux';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
//import action and catch to appAction
import * as appAction from './actions/app.action';
export default function App() {
  
  //0.init appReducer
  //0.1 map appReducer in useSelector
  const appReducer = useSelector(({appReducer:appReducer})=>appReducer)
  //0.2 call dispatch hook for use action by reducer
  const dispatch = useDispatch();

  return (
    <div style={{padding:10}}>
      <div style={{display:'flex', flexDirection:'row'}}>
        {/*2. update add action in reducer by dispatch*/}
        <button onClick={()=>{dispatch(appAction.add())}}>Add</button>
        {/*4. update remove action in reducer by dispatch*/}
        <button onClick={()=>{dispatch(appAction.remove())}}>REM</button>
        {/*5. update clear action in reducer by dispatch*/}
        <button onClick={()=>{dispatch(appAction.clear(0))}}>Clear</button>
      </div>
      {/*access function count in appReducer*/}
      <h1>Codemobiles : {appReducer.count}</h1>
      <Box1/>
      <Box2/>
      <Box3/>
    </div>
  );
}
