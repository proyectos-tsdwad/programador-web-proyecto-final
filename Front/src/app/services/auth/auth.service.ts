import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from 'src/app/models/auth/auth-model';
import { Credentials } from 'src/app/models/credentials/credentials-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}`;

  constructor(
    private http: HttpClient
  ) { }

  loginUser(credentials: Credentials): Observable<Auth> {
    return this.http.post<Auth>(`${this.apiUrl}/login`, credentials);
  }
}
