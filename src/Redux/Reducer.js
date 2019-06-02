import { combineReducers } from 'redux';
import CounterReducer from '../Screens/Counter/CounterReducer';
import CalculateReducer from '../Screens/Calculate/CalculateReducer';


export default combineReducers({
    counter : CounterReducer,
    calculate : CalculateReducer
})