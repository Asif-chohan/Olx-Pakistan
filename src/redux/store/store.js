import {combineReducers, createStore } from 'redux';
import handleCategory from './reducer/categoryReducer';
import searchHandlerReducer from './reducer/searchHandlerReducer'
// const rootReducer = combineReducers({
//     handleCategory,
//      searchHandlerReducer
// })
const store = createStore(handleCategory);

export default store;

