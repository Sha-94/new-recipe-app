import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "../models/recipe.model";
import {Ingredient} from "../models/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Turkey Sandwich',
      'Delicious Toasted Turkey Sandwich',
      'https://p1.pxfuel.com/preview/547/251/642/food-ham-filling-sandwich-cheese-delicious.jpg',
      [
        new Ingredient('Ciabata slice', 2),
        new Ingredient('Turkey Slice', 4),
        new Ingredient('Mayo', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Tomato', 1),
        new Ingredient('Green Leaf Lettuce', 1),

      ]),

    new Recipe(
      'Turkey Burger',
      'Juicy grilled turkey burger',
      'https://p1.pxfuel.com/preview/735/593/90/burgers-grilling-good-mat.jpg',
      [
        new Ingredient('Brioche Bun', 2),
        new Ingredient('Ground Turkey Patty', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Mayo', 1),
        new Ingredient('Ketchup', 1),
        new Ingredient('Tomato', 1),
        new Ingredient('Green Leaf Lettuce', 1),
        new Ingredient('Red onion rings', 2),
      ])
  ]
  constructor() { }

  getRecipes(): Recipe[] {
    //return recipes.slice() because slice returns a new copy of our array instead of a reference to it
    return this.recipes.slice();
  }
}
