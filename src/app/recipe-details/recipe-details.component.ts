import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/models/Category';
import { Recipes } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  myRecipe: Recipes = this.recipeServices.myRecipe;
  recipeSteps: string[];
  categoryDetails: Category;
  ingredientList: string[];
  levelStars: any = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`;

  constructor(
    private recipeServices: RecipeService,
    private categoryService: CategoryService,
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.ingredientList = this.myRecipe.IngredientList.split(',');
    this.recipeSteps = this.myRecipe.RecipeSteps.split(/[,.]/);
    this.recipeSteps.pop();
    this.categoryService
      .getCategoryByCode(this.myRecipe.CategoryCode)
      .subscribe(
        (secc) => {
          this.categoryDetails = secc;
          console.log(this.categoryDetails);
          this.fillDocument();
        },
        (error) => {
          console.log(error);
        },
      );
  }

  fillDocument(): void {
    const levelP = document.querySelector('#level');
    const category = document.querySelector('#category');

    for (let index = 0; index < this.myRecipe.DifficultyLevel; index++) {
      levelP.innerHTML += this.levelStars;
    }
    category.innerHTML +=
      this.categoryDetails.IconNavigation + ' ' + this.categoryDetails.Name;
  }

  canEdit(): boolean {
    const corentUser = JSON.parse(sessionStorage.getItem('myUser'));
    return this.myRecipe.OwnerCode === corentUser.Code;
  }

  edit(): void {
    this.router.navigate(['edit']);
  }
  goBack(): void {
    this.location.back();
  }
}
