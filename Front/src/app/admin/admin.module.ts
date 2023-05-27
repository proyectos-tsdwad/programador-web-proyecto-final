import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { BookDashboardPageComponent } from './pages/book-dashboard-page/book-dashboard-page.component';
import { ClientDashboardPageComponent } from './pages/client-dashboard-page/client-dashboard-page.component';
import { AuthorDashboardPageComponent } from './pages/author-dashboard-page/author-dashboard-page.component';
import { PublisherDashboardPageComponent } from './pages/publisher-dashboard-page/publisher-dashboard-page.component';

import { UserDashboardService } from './services/user/user-dashboard.service';
import { AuthorDashboardService } from './services/author/author-dashboard.service';
import { PublisherDashboardService } from './services/publisher/publisher-dashboard.service';



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
    UserDashboardService,
    AuthorDashboardService,
    PublisherDashboardService
  ]
})
export class AdminModule { }
