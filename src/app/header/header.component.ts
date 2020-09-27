import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {element} from "protractor";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() routeEmitter: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  showPage(event: HTMLElement){
    console.log(event.innerText);
    this.routeEmitter.emit(event.innerText);
  }
}
