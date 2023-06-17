import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from 'src/app/models/store/store-models';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(private http: HttpClient) {}

  calculateShippingCost(postalCode: number): number {
    const insideFederalCapital = 1000;
    const outsideOfFederalCapital = 2000;

    const cost =
      postalCode > 1000 && postalCode < 1600
        ? insideFederalCapital
        : outsideOfFederalCapital;

    return cost;
  }
  private apiUrl = environment.API_URL;
  private stores: Store[] = [];

  getAllStores() {
    const url = `${this.apiUrl}/store/`;

    return this.http.get<Store[]>(url);
  }
}
