import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = environment.baseUrl;

  private _user: User | undefined;

  // NOTE: because this service is provided in root (check injectable decorator) we can import it in other modules
  get user(): User {
    return { ...this._user! };
  }

  verifyAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      map((user) => {
        this._user = user;
        return true;
      })
    );
  }

  login() {
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((resp) => {
        this._user = resp;
        localStorage.setItem('token', this._user.id);
      })
    );
  }

  logout() {
    this._user = undefined;
    localStorage.removeItem('token');
  }
}
