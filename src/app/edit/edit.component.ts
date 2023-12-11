import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipes } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';
import { Location } from '@angular/common';
import { ValueValidation } from "../utils/validation";
import { Retrieval } from "../utils/retrieval";
import { Category } from "../../models/Category";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  editedRecipe: Recipes = this.recipeService.myRecipe;
  categories: any = [];
  ingredients: string[] = this.editedRecipe.IngredientList.split(',');
  steps = this.editedRecipe.RecipeSteps;
  constructor(
    private recipeService: RecipeService,
    private categoryService: CategoryService,
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.steps.push('');
    this.ingredients.push('');
    this.categories = Retrieval.retrieveCategories(this.categoryService) as Category[];
  }

  trackBy(index: number): any {
    return index;
  }
  check(e): void {
    if (e.target.id !== this.ingredients.length - 1) {
      if (e.target.value === '') {
        this.ingredients.splice(e.target.id, 1);
      } else {
        if (!this.ingredients.some(() => {})) {
          this.ingredients[+e.target.id] = e.target.value;
        }
      }
    }
  }

  addInput(e): void {
    if (e.target.id === this.ingredients.length - 1) {
      this.ingredients.push('');
    }
  }

  addInputMethod(e): void {
    if (e.target.id === this.steps.length - 1) {
      this.steps.push('');
    }
  }
  sendForm(): void {
    this._createUpdateRecipeObjects();
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.recipeService.changeRecipe(this.editedRecipe).subscribe(
          (secc) => {
            this.recipeService.myRecipe = secc;
            Swal.fire('Saved!', '', 'success');
            this.router.navigate(['allRecipes']);
          },
          (error) => { console.log(error); });
      } else if (result.isDenied) { this.location.back();}
    });
  }

  _createUpdateRecipeObjects() {
    this.editedRecipe.DateAdded = new Date();
    this.ingredients = this.ingredients.filter((x) => x !== '');
    this.editedRecipe.IngredientList = this.ingredients.join(',');
    this.editedRecipe.RecipeSteps = this.steps.filter((x) => x !== '');
  }

  protected readonly ValueValidation = ValueValidation;
}
