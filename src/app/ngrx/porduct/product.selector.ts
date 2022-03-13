import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppMovieState} from "./product.reducer";
import {AppState} from "../core.state";

export const selectFeature = (state:AppState)  => state.movieState;

export const selectMovies = createSelector(
  selectFeature,
  (state) => state
);
export const selectMoviesState = createSelector(
  selectFeature,
  (state) => state.state
);
