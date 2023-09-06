import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import box1 action
import * as box1Action from '../actions/box1.action';
export default function Box1() {
  //prepare appReducer for access count in Box1 component
  const appReducer = useSelector(({appReducer:appReducer})=>appReducer)
  const box1Reducer = useSelector(({box1Reducer:box1Reducer})=>box1Reducer)
  const dispatch = useDispatch();
  return (
    <div>
      <h2 onClick={()=>{dispatch(box1Action.add())}}>Box1 : {appReducer.count}, Box1({box1Reducer.count1})</h2>
      <span>{JSON.stringify(appReducer.account)}</span> 
    </div>
  );
}
