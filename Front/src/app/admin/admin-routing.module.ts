import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookDashboardPageComponent } from "./pages/book-dashboard-page/book-dashboard-page.component";
import { ClientDashboardPageComponent } from "./pages/client-dashboard-page/client-dashboard-page.component";

const routes: Routes = [
  { path: 'book-dashboard', component: BookDashboardPageComponent },
  { path: 'client-dashboard', component: ClientDashboardPageComponent }
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
