import * as actionTypes from '../actions/actionTypes';

const employees = (employees = [], action) => {
  switch (action.type) {
    case actionTypes.GET_EMPLOYEES:
      return action.data;

    default:
      return employees
  }
}

export default employees;
