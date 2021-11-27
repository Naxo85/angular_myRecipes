import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Recipe } from '../../interfaces/recipes.interface';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 10px;
      }
    `,
  ],
})
export class DetailsComponent implements OnInit {
  recipe!: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.recipesService.getRecipeById(id)))
      .subscribe((recipe) => (this.recipe = recipe));
  }

  return() {
    this.router.navigate(['/recipes/list']);
  }
}
