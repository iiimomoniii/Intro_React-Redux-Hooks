//(Reducer State in react cycle)
const initialState = {
    count:10,
    account : {username : "admin", password : "1234"}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  default:
    return state
  }
}
