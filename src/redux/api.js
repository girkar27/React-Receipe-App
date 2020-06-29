import * as ActionTypes from './ActionTypes';



export function Api(state = {
        errMess: null,
		api: []

	} , action){
    switch (action.type) {

        case ActionTypes.API_ADD:
            return {...state, errMess: null, api: action.payload};

        case ActionTypes.API_FAILED:
            return {...state, errMess: action.payload};
            
        case ActionTypes.ADD_POST_API:
            var entry =  action.payload;
            return {...state, api: state.api.concat(entry)};

        case ActionTypes.ADD_PUT_API:
            var updated_entry =  action.payload;
            return {...state, api: state.api.concat(updated_entry)};
        
        case ActionTypes.DELETE_API:
            return {...state, errMess: null, api: action.payload};            


        default:
          	return state;	

    }
}; 	


