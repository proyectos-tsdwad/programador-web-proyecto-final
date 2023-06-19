import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AdminNavigationService {
  constructor(private router: Router) { }

  navigateToBookDashboard() {
    this.router.navigate(['/admin/book-dashboard']);
  }
  navigateToSalesDashboard() {
    this.router.navigate(['/admin/sales-dashboard']);
    console.log('navigate service');
  }
  navigateToClientDashboard() {
    this.router.navigate(['/admin/client-dashboard']);
  }
}
