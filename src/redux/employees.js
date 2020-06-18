import * as ActionTypes from './ActionTypes';



export function Employees(state = {
        errMess: null,
		employees: []

	} , action){
    switch (action.type) {

        case ActionTypes.EMP_ADD:
            return {...state, errMess: null, employees: action.payload};

        case ActionTypes.EMP_FAILED:
            return {...state, errMess: action.payload};

    	case ActionTypes.ADD_EMPLOYEE:
    		var employee =  action.payload;
    		return {...state, employees: state.employees.concat(employee)};

        default:
          	return state;	


    }
}; 	


