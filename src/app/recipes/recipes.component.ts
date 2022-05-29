import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe-list/recipe.service';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  constructor() {}
  recipeDetail: Recipe;

  ngOnInit(): void {}
}
