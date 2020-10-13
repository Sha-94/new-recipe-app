import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.model";
import {ShoppingListService} from "../../services/shopping-list.service";
import {Ingredient} from "../../models/ingredient.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  private _selectedRecipe: Recipe;

  @Input() public set selectedRecipe(recipe: Recipe) {
      this._selectedRecipe = recipe;
  }

  public get selectedRecipe(){
    return this._selectedRecipe;
  }

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  public addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
