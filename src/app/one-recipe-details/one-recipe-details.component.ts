import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipes } from 'src/models/Recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-one-recipe-details',
  templateUrl: './one-recipe-details.component.html',
  styleUrls: ['./one-recipe-details.component.scss'],
})
export class OneRecipeDetailsComponent implements OnInit {
  @Input()
  myRecipe: Recipes;

  constructor(
    public router: Router,
    private recipeService: RecipeService,
  ) {}

  ngOnInit(): void {}
  showDetails(): void {
    this.recipeService.myRecipe = this.myRecipe;
    this.router.navigate(['recipeDetails']);
  }
}
