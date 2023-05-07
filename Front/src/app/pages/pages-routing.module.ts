import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home/home-page/home-page.component";
import { BookDetailComponent } from "./book/book-detail-page/book-detail.component";
import { BookDashboardPageComponent } from "./admin/book-dashboard/book-dashboard-page/book-dashboard-page.component";
import { CartDetailPageComponent } from "./cart/cart-detail-page/cart-detail-page.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'book-detail/:isbn', component: BookDetailComponent },
  { path: 'book-detail', component: BookDetailComponent },
  { path: 'book-dashboard', component: BookDashboardPageComponent },
  { path: 'cart-detail', component: CartDetailPageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
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
