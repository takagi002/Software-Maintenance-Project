import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://localhost:44358/api/user/allUsers');
  }
  checkLogin(user): Observable<number> {
    return this.http.post<number>(
      'https://localhost:44358/api/user/login',
      user,
    );
  }
  addUser(user): Observable<any> {
    return this.http.post<any>('https://localhost:44358/api/user/add', user);
  }
  getUser(user): Observable<any> {
    return this.http.post<any>(
      'https://localhost:44358/api/user/getUser',
      user,
    );
  }
}
