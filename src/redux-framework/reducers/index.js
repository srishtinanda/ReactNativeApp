import { combineReducers } from 'redux';
import InputReducer from './userInput';

export default combineReducers ({
    userInput : InputReducer
});