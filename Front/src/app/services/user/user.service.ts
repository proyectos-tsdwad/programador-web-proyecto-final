import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, CreateUserDTO } from 'src/app/models/user/user-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.API_URL}/registers`;

  constructor(
    private http: HttpClient
  ) { }

  createUser(dto: CreateUserDTO): Observable<User>{
    return this.http.post<User>(this.apiUrl, dto);
  }
}
