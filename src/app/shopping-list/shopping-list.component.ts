import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../models/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Milk', 1),
    new Ingredient('Pears', 3),
  ];

  constructor() { }

  ngOnInit() {
  }

}
