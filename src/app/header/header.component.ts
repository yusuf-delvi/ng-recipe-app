import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public isMenuCollapsed = true;

  @Output() navToVal = new EventEmitter<string>();

  navTo(val: string) {
    this.navToVal.emit(val);
  }
}
