import { Component, Input } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

import { Recipe } from '../../interfaces/recipes.interface';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styles: [],
})
export class RecipeSearchComponent {
  constructor(private router: Router) {}

  @Input() recipes!: Recipe[];
  filteredRecipes: Recipe[] = [];

  term: string = '';
  populateFlag: boolean = true;

  filtering() {
    this.filteredRecipes = this.recipes.filter((r) =>
      r.title.toLowerCase().includes(this.term.trim().toLowerCase())
    );
    this.populateFlag = false;
  }

  populating() {
    if (this.populateFlag) {
      this.filteredRecipes = this.recipes;
    }
  }

  processSelectedOption(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.filteredRecipes = this.recipes;
      return;
    }
    const selectedRecipe = event.option.value;
    this.router.navigate(['/recipes/details', selectedRecipe.id]);
  }
}
