const searchReducer = (state = "", action) => {
    switch(action.type){
        case "TERM":
            return state = action.payload;
        default:
            return state
    }
  }
  export default searchReducer;