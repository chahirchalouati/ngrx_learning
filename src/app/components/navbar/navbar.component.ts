import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

export interface RouteProps {
  name: string
  href: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  routeItems = environment.routeItems as Array<RouteProps>;


  constructor() {

  }

  ngOnInit(): void {
  }

}
