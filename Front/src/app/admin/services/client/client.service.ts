import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClientService {

  private apiURL = `${environment.API_URL}`;

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get<User[]>(`${this.apiURL}/users?_sort=authorName&_order=asc`)
  }
}
