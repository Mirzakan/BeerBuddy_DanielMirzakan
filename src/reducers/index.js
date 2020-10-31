import pageReducer from './pageReducer';
import searchReducer from './searchReducer';
import isClickedReducer from './isClickedReducer';
import favoriteReducer from './favoriteReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    pageReducer : pageReducer,
    searchReducer : searchReducer,
    isClickedReducer : isClickedReducer,
    favoriteReducer : favoriteReducer 
})
export default allReducers;