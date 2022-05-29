import { Component } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  onAdd(nameInput, amountInput) {
    const ingObj: Ingredient = {
      name: nameInput.value,
      amount: amountInput.value,
    };

    this.shoppingListService.addIngredient(ingObj);
  }
}
