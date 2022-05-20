import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pageValue: string = 'recipes';

  pageVal(value: string) {
    this.pageValue = value;
  }
}
