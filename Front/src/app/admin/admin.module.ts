import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { BookDashboardPageComponent } from './pages/book-dashboard-page/book-dashboard-page.component';
import { ClientDashboardPageComponent } from './pages/client-dashboard-page/client-dashboard-page.component';
import { AuthorDashboardPageComponent } from './pages/author-dashboard-page/author-dashboard-page.component';

import { AuthorDashboardService } from './services/author/author-dashboard.service';
import { ClientService } from './services/client/client.service';
import { PublisherDashboardPageComponent } from './pages/publisher-dashboard-page/publisher-dashboard-page.component';



@NgModule({
  declarations: [
    BookDashboardPageComponent,
    ClientDashboardPageComponent,
    AuthorDashboardPageComponent,
    PublisherDashboardPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    BookDashboardPageComponent,
    ClientDashboardPageComponent,
    AuthorDashboardPageComponent
  ],
  providers: [
    ClientService,
    AuthorDashboardService
  ]
})
export class AdminModule { }
