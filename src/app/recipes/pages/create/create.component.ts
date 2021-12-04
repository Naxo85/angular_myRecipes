import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Cuisines, Ingredient, Recipe, Step } from '../../interfaces/recipes.interface';
import { UrlImagePipe } from '../../pipes/get-url-image.pipe';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
    `
      .vertical-margin {
        margin: 10px 0;
      }
    `,
  ],
})
export class CreateComponent implements OnInit {
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.recipesService.getRecipeById(id)))
      .subscribe((recipe) => (this.recipe = recipe));
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router
  ) {}

  vegetarian: boolean = false;
  glutenFree: boolean = false;
  id: string = '';
  cuisinesEnum: Object = Cuisines;

  recipe: Recipe = {
    title: '',
    url_image: '',
    image_type: '',
    vegetarian: false,
    gluten_free: false,
    ready_in_minutes: 1,
    summary: '',
    cuisines: [],
    steps: [],
  };

  cuisineChecked(cuisine: string): boolean {
    if (this.recipe.cuisines.includes(cuisine)) {
      return true;
    }
    return false;
  }

  addCuisine(cuisine: string) {
    if (this.recipe.cuisines.includes(cuisine)) {
      this.recipe.cuisines.splice(this.recipe.cuisines.indexOf(cuisine), 1);
    } else {
      this.recipe.cuisines.push(cuisine);
    }
    return false;
  }

  getimageUrl() {
    var imagePipe = new UrlImagePipe();
    return imagePipe.transform(this.recipe);
  }

  addBlankStep() {
    let step: Step = {
      number: (this.recipe.steps?.length || 0) + 1,
      ingredients: [],
      step: '',
    };
    this.recipe.steps?.push(step);
  }

  saveRecipe() {
    if (this.recipe.title.trim().length === 0) {
      return;
    } else if (this.recipe.summary.trim().length === 0) {
      return;
    }

    if (this.recipe.id) {
      this.recipesService.updateRecipe(this.recipe).subscribe((recipe) => {
        this.recipe = recipe;
      });
    } else {
      this.recipesService.addRecipe(this.recipe).subscribe((recipe) => {
        this.recipe = recipe;
      });
    }
  }

  deleteRecipe() {
    this.recipesService.deleteRecipe(this.recipe).subscribe((recipe) => {
      this.router.navigate(['/recipes/list']);
    });
  }

  return() {
    this.router.navigate(['/recipes/list']);
  }
}
