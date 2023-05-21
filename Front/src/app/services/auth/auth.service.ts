import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from 'src/app/models/auth/auth-model';
import { Credentials } from 'src/app/models/credentials/credentials-model';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { User } from 'src/app/models/user/user-model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}`;
  private currentUser!: Auth;
  private profile!: User;
  private profileListener = new Subject<User>();

  constructor(
    private http: HttpClient
  ) { }

  loginUser(credentials: Credentials): Observable<Auth> {
    return this.http.post<Auth>(`${this.apiUrl}/login`, credentials);
  }

  getProfile(token: string, userId: number) {
    const headers = new HttpHeaders();
    headers.set('Authorization',  `Bearer ${token}`);
    return this.http.get<User>(`${this.apiUrl}/users/${userId}`, {
      headers
    });
  }

  loginAndGet(credentials: Credentials) {
    return this.loginUser(credentials)
    .pipe(
      switchMap(response => this.getProfile(response.access_token, response.user.id)),
    );
  }

  updateProfileListener(profile: User){
    this.profile = profile;
     this.profileListener.next({...this.profile});
  }

  getProfileListener(){
    return this.profileListener.asObservable();
  }

}
