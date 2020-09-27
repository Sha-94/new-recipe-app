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

  toggleDisplay(event: string) {
    if(event === "Shopping List") {
      this.displayRecipeList = false;
      this.displayShoppingList = true;
    } else {
      this.displayRecipeList = true;
      this.displayShoppingList = false;
    }
  }
}

