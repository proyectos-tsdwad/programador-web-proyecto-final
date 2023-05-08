import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home/home-page/home-page.component";
import { BookDetailComponent } from "./book/book-detail-page/book-detail.component";
import { BookDashboardPageComponent } from "./admin/book-dashboard/book-dashboard-page/book-dashboard-page.component";
import { CataloguePageComponent } from "./catalogue/catalogue-page/catalogue-page.component";
import { CartDetailPageComponent } from "./cart/cart-detail-page/cart-detail-page.component";
import { AccountDetailsComponent } from "./account/account-details/account-details.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'book-detail/:isbn', component: BookDetailComponent },
  { path: 'book-detail', component: BookDetailComponent },
  { path: 'book-dashboard', component: BookDashboardPageComponent },
  { path: 'catalogue', component: CataloguePageComponent },
  { path: 'cart-detail', component: CartDetailPageComponent },
  { path: 'profile', component: AccountDetailsComponent },
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
