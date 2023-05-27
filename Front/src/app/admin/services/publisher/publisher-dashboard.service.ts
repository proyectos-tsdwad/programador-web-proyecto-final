import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publisher } from 'src/app/models/publisher/publisher-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublisherDashboardService {

  private apiURL = `${environment.API_URL}`;

  constructor(
    private http: HttpClient
  ) { }

  getAllPublishers() {
    return this.http.get<Publisher[]>(`${this.apiURL}/publishers?_sort=name&_order=asc`);
  }
}
