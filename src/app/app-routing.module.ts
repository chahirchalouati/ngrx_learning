import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {AuthorComponent} from "./components/author/author.component";

const routes: Routes = [
  { path: '', component: ProductComponent},
  { path: 'home', component: ProductComponent},
  { path: 'authors', component: AuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
