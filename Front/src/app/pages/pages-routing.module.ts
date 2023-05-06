import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home/home-page/home-page.component";
import { BookDetailComponent } from "./book/book-detail-page/book-detail.component";

const routes: Routes = [
  { path: '', component: HomePageComponent } ,
  { path: 'home', component: HomePageComponent },
  { path: 'book-detail/:isbn', component: BookDetailComponent },
  { path: 'book-detail', component: BookDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
