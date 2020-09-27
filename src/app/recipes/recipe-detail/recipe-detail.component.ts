import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  _selectedRecipe: Recipe;

  @Input() public set selectedRecipe(recipe: Recipe) {
      this._selectedRecipe = recipe;
  }

  public get selectedRecipe(){
    return this._selectedRecipe;
  }

  constructor() { }

  ngOnInit() {
  }

}
