import * as ActionTypes from './ActionTypes';
// import { ADD_COMMENT } from './ActionTypes';
import { baseUrl, json_placeholder } from '../shared/baseUrl';
// import axios from axios


export const addComment = (added_comment) => ({
	
	type: ActionTypes.ADD_COMMENT,
	payload: added_comment
});

export const postComment = (dishId, rating, author, comment) =>(dispatch) =>{
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };

    newComment.date = new Date().toISOString();

        return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) {
              return response;
            }
            else {
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
            }
        },
        error => {
            throw error;
        })
        .then(response => response.json())
        .then(added_comment => dispatch(addComment(added_comment)))
        .catch(error => { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};



//dishes action creators and thunk

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

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            } 
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
	    .then(response => response.json())
	    .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));

}

// action creators for comments---------------------------------

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            } 
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
	    .then(response => response.json())
	    .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


// action creators for promotions-------------------------------

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response;
            } 
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })

	    .then(response => response.json())
	    .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
}  

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

// leaders acction creators


// export const fetchLeaders = () => (dispatch) => {
    
//     // dispatch(leadersLoading(true));
//     return fetch(baseUrl + 'leaders')
//         .then(response => response.json())
//         .then(leaders => dispatch(addLeaders(leaders)));
//         // .catch(error => dispatch(promosFailed(error.message)));
// }  


// export const addLeaders = (leaders) => ({
//     type: ActionTypes.ADD_LEADERS,
//     payload: leaders
// });

//  employees------------------------------------------------------------------------------


export const empFailed = (errmess) => ({
    type: ActionTypes.EMP_FAILED,
    payload: errmess
});

export const addEmp = (employees) => ({
    type: ActionTypes.EMP_ADD,
    payload: employees
});


export const fetchEmp = () => (dispatch) => {    
    return fetch(baseUrl + 'employees')
        .then(response => {
            if (response.ok) {
                return response;
            } 
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }  
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(employees => dispatch(addEmp(employees)))
        .catch(error => dispatch(empFailed(error.message)));
};





//---------------------------------------------------



export const addemployee = (added_employee) => ({
    type: ActionTypes.ADD_EMPLOYEE,
    payload: added_employee

});


export const postEmployee = (name, designation, age, skills, featured) => (dispatch) => {
    const newEmployee = {
        name: name,
        designation: designation,
        age: age,
        skills: skills,
        featured: featured
    };

        return fetch(baseUrl + 'employees', {
        method: "POST",
        body: JSON.stringify(newEmployee),
        headers: {
          "Content-Type": "application/json"
        }, 

        credentials: "same-origin"
        })
            .then(response => {
                if (response.ok) {
                  return response;
                }
                else {
                  var error = new Error('Error ' + response.status + ': ' + response.statusText);
                  error.response = response;
                  throw error;
                }
            },
            error => {
                throw error;
            })
            .then(response => response.json())
            .then(added_employee => dispatch(addemployee(added_employee)))
            .catch(error => { console.log('post employee', error.message); alert('Your employee could not be posted\nError: '+error.message); });
};



//====================================================================flask api thunks===============


