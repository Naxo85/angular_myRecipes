import { Component, Input } from '@angular/core';

import { Recipe } from '../../interfaces/recipes.interface';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styles: [],
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
}
