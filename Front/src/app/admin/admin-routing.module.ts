import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookDashboardPageComponent } from "./pages/book-dashboard-page/book-dashboard-page.component";

const routes: Routes = [
  { path: 'book-dashboard', component: BookDashboardPageComponent }
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
