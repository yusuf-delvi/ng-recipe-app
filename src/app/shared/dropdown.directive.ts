import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  isOpen: boolean = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.eleRef.nativeElement
      .querySelector('.dropdown-menu')
      .classList.toggle('show');
  }

  constructor(private eleRef: ElementRef) {}
}
