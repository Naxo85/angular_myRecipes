import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
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

  login() {
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(tap((resp) => (this._user = resp)));
  }
}
