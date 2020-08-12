// src/js/actions/index.jss

import { USER_LOGIN, SHOW_MATCH_PROFILE } from "../constants/action-types";

export function addEmail(payload) {
    return { type: USER_LOGIN, payload }
};

export function getData() {
    return function (dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "DATA_LOADED", payload: json });
            });
    };
}

export function showMatchnProfile(payload){
    return { type: SHOW_MATCH_PROFILE, payload }
}