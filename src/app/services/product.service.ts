import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../domain/Movie";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {

  }

  getMovies(): Observable<Array<Movie>> {
    return this.httpClient.get<Array<Movie>>("/movies");
  }
}
