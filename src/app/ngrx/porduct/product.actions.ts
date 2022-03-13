import { createAction, props } from "@ngrx/store";
import { LOAD_PRODUCTS, LOAD_PRODUCTS_ERROR, LOAD_PRODUCTS_SUCCESS } from "./product.actions.types";
import { Movie } from "../../domain/Movie";

export const loadProducts = createAction(LOAD_PRODUCTS);
export const loadProductsSuccess = createAction(LOAD_PRODUCTS_SUCCESS, props<{ movies: Array<Movie> }>());
export const loadProductsError = createAction(LOAD_PRODUCTS_ERROR, props<{ error: any }>());
