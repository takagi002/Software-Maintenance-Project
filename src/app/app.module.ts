import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { OneRecipeDetailsComponent } from './one-recipe-details/one-recipe-details.component';
import { LoginComponent } from './login/login.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { HoursPipe } from './hours.pipe';
import { EditComponent } from './edit/edit.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import {SandwichMenuComponent} from "./sandwich-menu/sandwich-menu.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    OneRecipeDetailsComponent,
    LoginComponent,
    AllRecipesComponent,
    RecipeDetailsComponent,
    HoursPipe,
    EditComponent,
    AddRecipeComponent,
    SandwichMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
