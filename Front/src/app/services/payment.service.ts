import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaymentData } from '../models/sale/payment-model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  processPayment(paymentData: PaymentData) {
    const url = `${this.apiUrl}/process-payment/`;
    return this.http.post<{ status: string }>(url, paymentData);
  }
}
