import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is simply a test',
      'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/15latkes.jpg'),

    new Recipe('Another recipe', 'This is simply another test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAPpyW-dX7WX52D_Ay7P2mdU7d1nPq8qul-w&usqp=CAU')
  ]
  constructor() { }

  ngOnInit() {
  }

}
