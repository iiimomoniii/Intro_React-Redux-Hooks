import { APP_ACTION_BOX1_ADD } from "../constants/app.constant";

export const setStateToAdd = () => ({
  type: APP_ACTION_BOX1_ADD
})

export const add = ()=>{
    return dispatch=>{
    dispatch(setStateToAdd())
    }
}
