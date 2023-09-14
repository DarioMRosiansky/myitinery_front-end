import { createReducer } from "@reduxjs/toolkit";
import { loginTokenAction, logoutAction, signInAction, signUpAction } from "../actions/usersActions";

const initialState = {
  user: null,
  token: null
}

export const userReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(signInAction.fulfilled, (store, action) => {
      const newState = { ...store, user: action.payload.user, token: action.payload.token };
      return newState
    })
    .addCase(signUpAction.fulfilled, (store, action) => {
      console.log("action", action.payload);
      const newState = { ...store, user: action.payload.user, token: action.payload.token }
      return newState
    })
    .addCase(logoutAction, (store, action) => {
      return {
        ...store,
        user: null,
        token: null
      }
    })
    .addCase(loginTokenAction.fulfilled, (store, action) => {
      return { ...store, user: action.payload.user, token: action.payload.token }
    })
})