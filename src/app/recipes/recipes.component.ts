import { Component, OnInit } from '@angular/core';
import {Recipe} from "../models/recipe.model";
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  _selectedRecipe: Recipe;

  public set selectedRecipe(recipe: Recipe) {
    this._selectedRecipe = recipe;
  }

  public get selectedRecipe(){
    return this._selectedRecipe;
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(recipe => this.selectedRecipe = recipe);
  }

}
