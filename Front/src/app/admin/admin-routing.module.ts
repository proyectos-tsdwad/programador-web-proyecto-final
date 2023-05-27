import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookDashboardPageComponent } from "./pages/book-dashboard-page/book-dashboard-page.component";
import { ClientDashboardPageComponent } from "./pages/client-dashboard-page/client-dashboard-page.component";
import { AuthorDashboardPageComponent } from "./pages/author-dashboard-page/author-dashboard-page.component";
import { PublisherDashboardPageComponent } from "./pages/publisher-dashboard-page/publisher-dashboard-page.component";
import { SalesDashboardPageComponent } from "./pages/sales-dashboard-page/sales-dashboard-page.component";

const routes: Routes = [
  { path: 'book-dashboard', component: BookDashboardPageComponent },
  { path: 'client-dashboard', component: ClientDashboardPageComponent },
  { path: 'author-dashboard', component: AuthorDashboardPageComponent },
  { path: 'publisher-dashboard', component: PublisherDashboardPageComponent },
  { path: 'sale-dashboard', component: SalesDashboardPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
