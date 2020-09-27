import {Directive, ElementRef, HostBinding, HostListener, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  @HostBinding('class.open') isOpen: boolean;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
  }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }


}
