import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/Category';
import { Recipes } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';
import {Retrieval} from "../utils/retrieval";

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss'],
})
export class AllRecipesComponent implements OnInit {
  origenalRecipes: Recipes[];
  RecipesArr: Recipes[];
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
      (secc) => {
        this.origenalRecipes = secc;
        this.RecipesArr = secc;
      },
      (error) => {
        console.log(error);
      },
    );
    this.categories = Retrieval.retrieveCategories(this.categoryService) as Category[];
  }
  isSameCategory(categoryCode): any {
    console.log(this.categories);
    return (
      this.categories.find(
        (c) => c.Code === categoryCode && c.Name.includes(this.category),
      ) !== undefined
    );
  }
  filter(): void {
    this.RecipesArr = this.origenalRecipes;
    if (this.name !== '') {
      this._setPrepTime();
    }
    console.log(this.RecipesArr);
    if (this.category !== '') {
      this._setPrepTime()
    }
    console.log(this.RecipesArr);
    if (this.time !== 0) {
      this._setPrepTime();
    }
    console.log(this.RecipesArr);
  }

  _setPrepTime() {
    this.RecipesArr = this.RecipesArr.filter(
      (r) => r.PreparationTime === this.time,
    );
  }
}
