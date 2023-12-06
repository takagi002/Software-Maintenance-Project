import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { CanEnter } from './canEnter';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RegisterComponent } from './register/register.component';
import {LandingPageComponent} from "./landing-page/landing-page.component";

export const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'add', component: AddRecipeComponent, canActivate: [CanEnter] },
  { path: 'edit', component: EditComponent },
  {
    path: 'recipeDetails',
    component: RecipeDetailsComponent,
    canActivate: [CanEnter],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register/:name', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'allRecipes', component: AllRecipesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
