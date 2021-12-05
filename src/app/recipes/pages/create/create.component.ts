import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmDeleteComponent } from '../../components/confirm-delete/confirm-delete.component';

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
    if (this.router.url.includes('create')) {
      return;
    }
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.recipesService.getRecipeById(id)))
      .subscribe((recipe) => (this.recipe = recipe));
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
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
        this.showSnackBar('Recipe updated!');
      });
    } else {
      this.recipesService.addRecipe(this.recipe).subscribe((recipe) => {
        this.recipe = recipe;
        this.showSnackBar('Recipe added!');
      });
    }
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Ok!', {
      duration: 2000,
    });
  }

  deleteRecipe() {
    const dialog = this.dialog.open(ConfirmDeleteComponent, {
      width: '250px',
      data: { ...this.recipe }, //pasamos la destructuración del objeto ya que en otro caso se pasaría por referencia y no sería igual de seguro
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.recipesService.deleteRecipe(this.recipe).subscribe((recipe) => {
          this.router.navigate(['/recipes/list']);
        });
      }
    });
  }

  return() {
    this.router.navigate(['/recipes/list']);
  }
}
