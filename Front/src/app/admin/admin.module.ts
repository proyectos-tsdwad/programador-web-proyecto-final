import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { BookDashboardPageComponent } from './pages/book-dashboard-page/book-dashboard-page.component';



@NgModule({
  declarations: [
    BookDashboardPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    BookDashboardPageComponent
  ]
})
export class AdminModule { }
