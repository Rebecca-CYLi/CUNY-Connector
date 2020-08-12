// src/js/reducers/index.js:

import { USER_LOGIN, SHOW_MATCH_PROFILE } from "../constants/action-types";

const initialState = {
  email: '',
  password: '',
  isActive: false
};

function rootReducer(state = initialState, action) {

  if (action.type === USER_LOGIN) {
    return Object.assign({}, state, {
      email: state.email.concat(action.payload)
    });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }




  if (action.type === SHOW_MATCH_PROFILE) {
    return Object.assign({}, state, {
      isActive: true
    })
  }


  return state;
}

export default rootReducer;