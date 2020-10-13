import {Component, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../models/ingredient.model";
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.fetchIngredients()
    this.shoppingListService.onIngredientsChanged.subscribe(() => this.fetchIngredients());
  }

  private fetchIngredients(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }


}
