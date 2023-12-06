import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/models/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(public http: HttpClient) {}
  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(
      'http://localhost:3000/api/category/allCategory',
    );
  }
  getCategoryByCode(code): Observable<any> {
    return this.http.post<Category>(
      'http://localhost:3000/api/category/categoryByCode',
      code,
    );
  }
}
