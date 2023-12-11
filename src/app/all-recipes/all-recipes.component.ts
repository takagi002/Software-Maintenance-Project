import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/Category';
import { Recipes } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';
import { Retrieval } from "../utils/retrieval";

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss'],
})
export class AllRecipesComponent implements OnInit {
  originalRecipes: Recipes[];
  recipeList: Recipes[];
  categories: Category[] = [];
  name = '';
  category: any = '';
  time = 0;
  constructor(
    public recipeService: RecipeService,
    public categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(
      (recipes) => {
        this.originalRecipes = recipes;
        this.recipeList = recipes;
      },
      (error) => {
        console.log(error);
      },
    );
    this.categories = Retrieval.retrieveCategories(this.categoryService) as Category[];
  }

  filter(): void {
    this.recipeList = this.originalRecipes;
    if (this.name !== '') { this._setPrepTime(); }
    if (this.category !== '') { this._setPrepTime() }
    if (this.time !== 0) { this._setPrepTime(); }
  }

  _setPrepTime() {
    this.recipeList = this.recipeList.filter(
      (r) => r.PreparationTime === this.time,
    );
  }
}
