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

export const add = ()=> {
  return dispatch =>{
    dispatch(setStateToAdd())
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
