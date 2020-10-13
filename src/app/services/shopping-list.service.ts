import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../models/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [];

  public onIngredientsChanged = new EventEmitter<Ingredient>();

  constructor() { }

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  public addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.onIngredientsChanged.emit();
  }

  public addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
  }

}
