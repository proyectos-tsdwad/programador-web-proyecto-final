import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { BookDashboardPageComponent } from './pages/book-dashboard-page/book-dashboard-page.component';
import { ClientDashboardPageComponent } from './pages/client-dashboard-page/client-dashboard-page.component';
import { ClientService } from './services/client/client.service';



@NgModule({
  declarations: [
    BookDashboardPageComponent,
    ClientDashboardPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    BookDashboardPageComponent,
    ClientDashboardPageComponent
  ],
  providers: [
    ClientService
  ]
})
export class AdminModule { }
