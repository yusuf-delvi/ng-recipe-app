import {
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() addItem = new EventEmitter<{ name: string; amount: number }>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(nameInput, amountInput) {
    this.addItem.emit({ name: nameInput.value, amount: amountInput.value });
  }
}
