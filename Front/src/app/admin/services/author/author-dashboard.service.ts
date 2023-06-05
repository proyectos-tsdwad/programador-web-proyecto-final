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
    const url = `${this.apiURL}/authors/`;
    return this.http.get<Author[]>(url);
  }

  oderAuthorsByAuthorNameAsc(author: Author[]) {
    author.sort((a, b) => {
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

    return author;
  }
}
