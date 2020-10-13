import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  displayShoppingList: boolean;
  displayRecipeList: boolean;

  ngOnInit() {
    this.displayShoppingList = false;
    this.displayRecipeList = false;
  }
}

