import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, CreateUserDTO } from 'src/app/models/user/user-model';
import { Observable } from 'rxjs';
import { Purchase } from 'src/app/models/user/purchase-model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL =`${environment.API_URL}`;

  private apiUrl = `${environment.API_URL}/registers`;

  constructor(
    private http: HttpClient,

  ) { }

  createUser(dto: CreateUserDTO): Observable<User>{
    return this.http.post<User>(this.apiUrl, dto);
  }


  getPersonalData(id: number): Observable<User> {
    const url = `${this.apiURL}/users/${id}`;
    console.log('URL:',url);
    return this.http.get<User>(url);
  }

  getPurchaseHistory(): Observable<Purchase[]> {
    const url = `${this.apiURL}/purchases/`;
    console.log('URL:', url);
    return this.http.get<Purchase[]>(url);
  }
}
