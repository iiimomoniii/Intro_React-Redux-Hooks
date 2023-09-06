//(Reducer State in react cycle)
import {APP_ACTION_ADD, APP_ACTION_CLR, APP_ACTION_REM} from '../constants/app.constant'
const initialState = {
  count: 0,
  account: { username: "admin", password: "1234" },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    //1 case add action
    case APP_ACTION_ADD:
      //update value when add action
      //current count equal previous count plus 1
      //...state equal clone account and set to new state
      return { ...state, count: state.count + 1 };
    //3 case remove action
    case APP_ACTION_REM: 
      return { ...state, count: state.count - 1 };
    //5 case clear action
    case APP_ACTION_CLR:
      return { ...state, count: payload };

    default:
      //return old state
      return state;
  }
};
