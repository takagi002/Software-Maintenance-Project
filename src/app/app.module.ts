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
import { EditComponent } from './edit/edit.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import {SandwichMenuComponent} from "./sandwich-menu/sandwich-menu.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    OneRecipeDetailsComponent,
    LoginComponent,
    AllRecipesComponent,
    RecipeDetailsComponent,
    EditComponent,
    AddRecipeComponent,
    SandwichMenuComponent,
    LandingPageComponent
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
        MatIconModule,
        MatCheckboxModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
