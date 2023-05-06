import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home/home-page/home-page.component";
import { BookDashboardPageComponent } from "./admin/book-dashboard/book-dashboard-page/book-dashboard-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
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
export class PagesRoutingModule { }
