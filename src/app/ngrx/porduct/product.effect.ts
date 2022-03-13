import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { ProductService } from "../../services/product.service";
import * as ProductsActions from "./product.actions";

@Injectable()
export class ProductEffect {

  constructor(private store: Store, private actions$: Actions, private productService: ProductService) {
  }

  loadMovies = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      exhaustMap(() => this.productService.getMovies().pipe(
        map((movies) => ProductsActions.loadProductsSuccess({ movies })),
        catchError((error) => of(ProductsActions.loadProductsError(error)))
      )
      )
    );
  });
}
