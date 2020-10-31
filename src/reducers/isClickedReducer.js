const isClickedReducer = (state = false, action) => {
    switch(action.type){
        case "FETCH":
            return !state;
        default:
            return state
    }
  }
  export default isClickedReducer;