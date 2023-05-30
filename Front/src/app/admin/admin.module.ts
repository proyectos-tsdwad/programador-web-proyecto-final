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
import { SaleDashboardService } from './services/sale/sale-dashboard.service';
import { SalesDashboardPageComponent } from './pages/sales-dashboard-page/sales-dashboard-page.component';



@NgModule({
  declarations: [
    BookDashboardPageComponent,
    ClientDashboardPageComponent,
    AuthorDashboardPageComponent,
    PublisherDashboardPageComponent,
    SalesDashboardPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [
    UserDashboardService,
    AuthorDashboardService,
    PublisherDashboardService,
    SaleDashboardService
  ]
})
export class AdminModule { }
