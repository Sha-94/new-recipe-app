import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../models/ingredient.model";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(name: HTMLInputElement, amount: HTMLInputElement): void {
      this.shoppingListService.addIngredient(new Ingredient(name.value, Number(amount.value)));
  }
}
