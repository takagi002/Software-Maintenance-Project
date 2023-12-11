import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipes } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { ValueValidation } from "../utils/validation";
import {Retrieval} from "../utils/retrieval";
import {Category} from "../../models/Category";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  editedRecipe: Recipes = this.recipeService.myRecipe;
  categories: any = [];
  Components: string[] = this.editedRecipe.ComponentsList.split(',');
  methods = this.editedRecipe.PreparationMethod;
  constructor(
    private recipeService: RecipeService,
    private categoryService: CategoryService,
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit(): void {
    // take care of variables
    this.methods.push('');
    this.Components.push('');
    this.categories = Retrieval.retrieveCategories(this.categoryService) as Category[];
  }
  // lists care
  trakbiy(index: number): any {
    return index;
  }
  check(e): void {
    if (e.target.id !== this.Components.length - 1) {
      if (e.target.value === '') {
        this.Components.splice(e.target.id, 1);
      } else {
        if (!this.Components.some(() => {})) {
          this.Components[+e.target.id] = e.target.value;
        }
      }
    }
  }

  addInput(e): void {
    if (e.target.id === this.Components.length - 1) {
      this.Components.push('');
    }
  }

  addInputMethod(e): void {
    if (e.target.id === this.methods.length - 1) {
      this.methods.push('');
    }
  }
  sendForm(): void {
    this.editedRecipe.DateAdded = new Date();
    this.Components = this.Components.filter((x) => x !== '');
    this.editedRecipe.ComponentsList = this.Components.join(',');
    this.editedRecipe.PreparationMethod = this.methods.filter((x) => x !== '');
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
          (error) => {
            console.log(error);
          },
        );
      } else if (result.isDenied) {
        this.location.back();
      }
    });
  }

  protected readonly ValueValidation = ValueValidation;
}
