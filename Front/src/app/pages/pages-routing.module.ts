import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home/home-page/home-page.component";
import { BookDetailComponent } from "./book/book-detail-page/book-detail.component";
import { BookDashboardPageComponent } from "./admin/book-dashboard/book-dashboard-page/book-dashboard-page.component";
import { CataloguePageComponent } from "./catalogue/catalogue-page/catalogue-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent } ,
  { path: 'home', component: HomePageComponent },
  { path: 'book-detail/:isbn', component: BookDetailComponent },
  { path: 'book-detail', component: BookDetailComponent },
  { path: 'book-dashboard', component: BookDashboardPageComponent },
  { path: 'catalogue', component: CataloguePageComponent }
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
