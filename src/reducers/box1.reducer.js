import { APP_ACTION_BOX1_ADD } from "../constants/app.constant"

const initialState = {
    count1 : 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_ACTION_BOX1_ADD :
        return {...state, count1 : state.count1 +1}
  default:
    return state
  }
}
