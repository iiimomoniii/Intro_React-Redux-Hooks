import React from "react";
import { useSelector } from "react-redux";

export default function Box1() {
  //prepare appReducer for access count in Box1 component
  const appReducer = useSelector(({appReducer:appReducer})=>appReducer)
  return (
    <div>
      <h2>Box1 : {appReducer.count}</h2>
      <span>{JSON.stringify(appReducer.account)}</span> 
    </div>
  );
}
