import {
  combineReducers
} from 'redux';

// Reducers
import employees from './employeeReducer';

// Combine Reducers
var rootReducer = combineReducers({
  employees
});

export default rootReducer;
