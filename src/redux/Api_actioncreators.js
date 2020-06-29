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


export const api_put_entry = (update_entry) => ({
    type: ActionTypes.ADD_PUT_API,
    payload: update_entry

});

export const put_api = (id, firstname, lastname, age, skills, address) => (dispatch) => {
    const update_database_entry = { 
        firstname: firstname,
        lastname: lastname,
        age: age,
        skills: skills,
        address: address
    };

        return fetch(`/update/${id}`, {
        method: "PUT",
        body: JSON.stringify(update_database_entry),
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
            .then(update_entry => dispatch(api_put_entry(update_entry)))
            .catch(error => { console.log('post entry', error.message); alert('Your entry could not be posted\nError: '+error.message); });
};

//====================================deelete api data==============================

export const api_delete_entry = (delete_entry) => ({
    type: ActionTypes.DELETE_API,
    payload: delete_entry

});



export const delete_api = (id) => (dispatch) => {

        return fetch(`/delete/${id}`, {
        method: "DELETE",
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
            .then(delete_entry => dispatch(api_delete_entry(delete_entry)))
            .catch(error => { console.log('delete entry', error.message); alert('Your entry could not be deleted\nError: '+error.message); });
};





