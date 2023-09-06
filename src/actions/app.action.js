import { APP_ACTION_ADD, APP_ACTION_CLR, APP_ACTION_REM } from "../constants/app.constant";
//Action set value (Action State in react cycle)
export const setStateToAdd = () => ({
  //use constant values
  type: APP_ACTION_ADD
})

//Action remove value 
export const setStateToRem = () => ({
  type: APP_ACTION_REM
})

//Action clear value 
export const setStateToClr = payload => ({
  type: APP_ACTION_CLR,
  payload
});

//send data when add in synchronous type realtime to return updated value
// export const add = ()=> {
//   return dispatch =>{
//     dispatch(setStateToAdd())
//   }
// }

//send data when add in asynchronous type
export const add = ()=> {
  return dispatch =>{
    //set time for delay when feed data from api in 1 sec
    setTimeout(()=>{
      //update value when feed data is completed
      dispatch(setStateToAdd());
    },1000)
    
  }
}

export const remove = ()=> {
  return dispatch =>{
    dispatch(setStateToRem())
  }
}

export const clear = (payload)=> {
  return dispatch =>{
    dispatch(setStateToClr(payload))
  }
}
