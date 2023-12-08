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
    return this.http.get<User[]>('http://localhost:3000/api/user/allUsers');
  }
  addUser(user): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/user/add', user);
  }
  getUser(user): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/api/user/getUser',
      user,
    );
  }

  getUserByName(name: string): Observable<any> {
    return this.http.post<User>('http://localhost:3000/api/user/byName', {name});
  }
}
