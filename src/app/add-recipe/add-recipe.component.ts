import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/Category';
import { Recipes } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  images: string[];
  categories: Category[];
  Components: string[] = [''];
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
    this.recipeService.getImgSrc().subscribe(
      (secc) => {
        this.images = secc;
      },
      (error) => {
        console.log(error);
      },
    );
    this.categoryService.getAllCategory().subscribe(
      (secc) => {
        this.categories = secc;
      },
      (error) => {
        console.log(error);
      },
    );
  }

  sendForm(): void {
    this.addedRecipe.OwnerCode = JSON.parse(
      sessionStorage.getItem('myUser'),
    ).Code;
    this.addedRecipe.DateAdded = new Date();
    this.Components = this.Components.filter((x) => x !== '');
    this.addedRecipe.ComponentsList = this.Components.join(',');
    this.addedRecipe.PreparationMethod = this.methods.filter((x) => x !== '');
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
