import { Component, OnInit } from '@angular/core';
import {Recipe} from "../models/recipe.model";

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

  constructor() { }

  ngOnInit() {
  }

}
