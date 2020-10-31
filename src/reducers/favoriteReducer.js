const favoriteReducer = (state = {}, action) => {
    switch(action.type){
        case "SET":
            return state[action.id] = 0;
        default:
            return state
    }
  }
  export default favoriteReducer;