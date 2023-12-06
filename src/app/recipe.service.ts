import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipes } from 'src/models/Recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(public http: HttpClient) {}
  myRecipe: Recipes;
  getAllRecipes(): Observable<any> {
    return this.http.get<Recipes[]>(
      'http://localhost:3000/api/recipes/allRecipes',
    );
  }
  getImgSrc(): Observable<any> {
    return this.http.get<string[]>(
      'http://localhost:3000/api/recipes/images',
    );
  }
  addRecipe(recipe): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/api/recipes/add',
      recipe,
    );
  }
  changeRecipe(recipe): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/api/recipes/change',
      recipe,
    );
  }
}
