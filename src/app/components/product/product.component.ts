import {Component, OnInit} from '@angular/core';
import {Movie} from "../../domain/Movie";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {loadProducts} from "../../ngrx/porduct/product.actions";
import {Observable} from "rxjs";
import {selectMovies, selectMoviesState} from "../../ngrx/porduct/product.selector";
import {AppState} from "../../ngrx/core.state";
import {AppMovieState, FETCH_STATE} from "../../ngrx/porduct/product.reducer";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  moviesState$: Observable<AppMovieState> = this.store.select(selectMovies);
  movies: Array<Movie> | undefined;
  state$: Observable<FETCH_STATE> = this.store.select(selectMoviesState);

  constructor(private productService: ProductService,
              private router: Router,
              private store: Store<AppState>) {
    this.store.dispatch(loadProducts());
    this.moviesState$.subscribe(storeState => {
      this.movies = storeState.products;
    });

  }


  ngOnInit(): void {

  }

  navigateToAuthor(authorName: string) {
    this.router.navigate(["/authors"], {queryParams: {name: authorName}})
  }
}
