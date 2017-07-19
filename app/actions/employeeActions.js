import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getEmployeesAction = (data) => {
  return {
    type: actionTypes.GET_EMPLOYEES,
    data
  }
}

export function getEmployees(){
  return function(dispatch) {
    setTimeout(() => {
      axios.get("http://localhost:9000/data/employeesMockData.json").then(result => {
        console.log('Result:',result);
        dispatch(getEmployeesAction(result.data.data));
      }).catch(err => {
        console.error('error while getting employees:',err);
      });
    }, 1000);
  }
};
