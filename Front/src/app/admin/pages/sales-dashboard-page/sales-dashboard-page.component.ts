import { Component } from '@angular/core';
import { Sale } from 'src/app/models/sale/sale-model';

@Component({
  selector: 'app-sales-dashboard-page',
  templateUrl: './sales-dashboard-page.component.html',
  styleUrls: ['./sales-dashboard-page.component.css']
})
export class SalesDashboardPageComponent {

  sales: Sale[] = [];
}
