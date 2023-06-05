import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publisher } from 'src/app/models/publisher/publisher-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class PublisherDashboardService {

  private apiURL = `${environment.API_URL}`;

  constructor(
    private http: HttpClient
  ) { }

  getAllPublishers() {
    const url = `${this.apiURL}/publishers/`;
    return this.http.get<Publisher[]>(url);
  }

  oderPublishersByAuthorNameAsc(publisher: Publisher[]) {
    publisher.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    return publisher;
  }
}
