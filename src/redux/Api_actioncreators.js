import * as ActionTypes from './ActionTypes';
// import { ADD_COMMENT } from './ActionTypes';





//===============================api thunks [get] actions=======================================================================================

export const apiFailed = (errmess) => ({
    type: ActionTypes.API_FAILED,
    payload: errmess
});

export const addApi = (api) => ({
    type: ActionTypes.API_ADD,
    payload: api
});


export const fetchApi = () => (dispatch) => {    
    return fetch("/display")
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
        .then(api => dispatch(addApi(api)))
        .catch(error => dispatch(apiFailed(error.message)));

        // .then(api=> console.log(api))
};


//===========api post actions===========================================================
export const api_post_entry = (add_entry) => ({
    type: ActionTypes.ADD_POST_API,
    payload: add_entry

});

export const post_api = (firstname, lastname, age, skills, address) => (dispatch) => {
    const new_database_entry = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        skills: skills,
        address: address
    };

        return fetch("/adduser", {
        method: "POST",
        body: JSON.stringify(new_database_entry),
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
            .then(add_entry => dispatch(api_post_entry(add_entry)))
            .catch(error => { console.log('post entry', error.message); alert('Your entry could not be posted\nError: '+error.message); });
};
