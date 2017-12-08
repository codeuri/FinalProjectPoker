import * as types from '../constants/actionTypes';

// Actions here

export const someAction = (payload) => ({type: types.SOME_ACTION, payload});
export const DBtoStore = (payload) => ({type: types.LOAD_DB_TO_STORE, payload});
export const changeCurrentQuestion = (payload) => ({type: types.CHANGE_CURRENT_QUESTION, payload});
export const gameBar = (payload) => ({type: types.CHECK_CURRENT_QUESTION, payload});
