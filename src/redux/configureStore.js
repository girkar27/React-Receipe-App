import { createStore, combineReducers,  applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { Employees } from './employees';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { createForms } from 'react-redux-form';
import { InitialFeedback, EmptyAttribute } from './forms';


 
// import { Reducer, initialState } from './reducer'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
        	dishes: Dishes, //state.dishes  //from reducer functions
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            employees: Employees,

            ...createForms({
            	feedback: InitialFeedback,
            	attributes: EmptyAttribute
            })

        }),

        applyMiddleware(thunk, logger)
    );

    return store;
}


