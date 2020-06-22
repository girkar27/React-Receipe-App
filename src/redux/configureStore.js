import { createStore, combineReducers,  applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { Employees } from './employees';
import { Api } from './api';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { createForms } from 'react-redux-form';
import { InitialFeedback, EmptyAttribute, python_post_api } from './forms';


 
// import { Reducer, initialState } from './reducer'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
        	dishes: Dishes, //state.dishes  //from reducer functions
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            employees: Employees,
            api: Api,

            ...createForms({
            	feedback: InitialFeedback,
            	attributes: EmptyAttribute,
                python_post_api: python_post_api
            })

        }),

        applyMiddleware(thunk, logger)
    );

    return store;
}


