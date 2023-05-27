import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from 'src/app/models/author/author-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthorDashboardService {

  private apiURL = `${environment.API_URL}`;

  constructor(
    private http: HttpClient
  ) { }

  getAllAuthors() {
    return this.http.get<Author[]>(`${this.apiURL}/authors?_sort=name&_order=asc`);
  }
}
