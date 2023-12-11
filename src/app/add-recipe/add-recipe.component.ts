import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/Category';
import { Recipes } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { Retrieval } from "../utils/retrieval";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  categories: Category[];
  ingredients: string[] = [''];
  methods: string[] = [''];
  addedRecipe: Recipes = new Recipes(
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );
  constructor(
    public recipeService: RecipeService,
    public categoryService: CategoryService,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.categories = Retrieval.retrieveCategories(this.categoryService) as Category[];
  }

  sendForm(): void {
    this.addedRecipe.OwnerCode = JSON.parse(
      sessionStorage.getItem('myUser'),
    ).Code;
    this.addedRecipe.DateAdded = new Date();
    this.ingredients = this.ingredients.filter((x) => x !== '');
    this.addedRecipe.IngredientList = this.ingredients.join(',');
    this.addedRecipe.RecipeSteps = this.methods.filter((x) => x !== '');
    this.recipeService.addRecipe(this.addedRecipe).subscribe(
      () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your recipe has been saved',
          showConfirmButton: false,
          timer: 2000,
        });
        this.router.navigate(['allRecipes']);
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
