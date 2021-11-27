import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../interfaces/recipes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  constructor(private recipesService: RecipesService) {}

  recipes: Recipe[] = [];
  term: String = '';

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}
