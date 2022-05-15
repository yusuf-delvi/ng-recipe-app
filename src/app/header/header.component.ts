import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public isMenuCollapsed = true;
  public isManageCollapsed = true;
}
