import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from 'src/app/models/sale/sale-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class SaleDashboardService {

  private apiURL = `${environment.API_URL}`;

  constructor(
    private http: HttpClient
  ) { }

  getAllSales() {
    return this.http.get<Sale[]>(`${this.apiURL}/sales?_expand=user&_expand=shipment`);
  }

}
