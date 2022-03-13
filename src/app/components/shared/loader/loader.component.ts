import {Component, Input, OnInit} from '@angular/core';
import {FETCH_STATE} from "../../../ngrx/porduct/product.reducer";
import {EMPTY, Observable} from "rxjs";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() state: Observable<FETCH_STATE> = EMPTY;
  isLoading: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.state.subscribe(value => this.isLoading = value === "LOADING")
  }

}
