import {Movie} from "../../domain/Movie";
import {createReducer, on} from "@ngrx/store";
import {loadProducts, loadProductsError, loadProductsSuccess} from "./product.actions";

export type FETCH_STATE = "INITIAL" | "LOADING" | "LOADED" | "ERROR";

export interface AppMovieState {
  products: Array<Movie>,
  state: FETCH_STATE,
  error: any,
}

const movieInitialState: AppMovieState = {
  error: null,
  products: [],
  state: "INITIAL",
}

export const movieReducer = createReducer(movieInitialState,
  on(loadProducts, (state) => ({...state, state: "LOADING", products: [], error: null})),
  on(loadProductsSuccess, (state, payload) => ({...state, state: "LOADED", products: payload.movies , error: null})),
  on(loadProductsError, (state, payload) => ({...state, state: "ERROR", error: payload.error}))
)
