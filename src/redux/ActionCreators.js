import * as ActionTypes from './ActionTypes';
// import { ADD_COMMENT } from './ActionTypes';
import { DISHES } from '../shared/dishes';


// export function  addComment(dishId, rating, author, comment){
// 	return({
// 		type: ADD_COMMENT,
// 		payload:{
// 			dishId: dishId,
// 			rating: rating,
// 			author: author, 
// 			comment: comment
// 		}
// 	});
// }


export const addComment = (dishId, rating, author, comment) => ({
	
		type: ActionTypes.ADD_COMMENT,
		payload:{

			dishId: dishId,
			rating: rating,
			author: author, 
			comment: comment
		}
});


export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});


export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});


export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});



// fetchDishes thunk-----------------

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}