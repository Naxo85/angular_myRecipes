import { Component } from '@angular/core';
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
export class CreateComponent {
  constructor(private recipesService: RecipesService) {}

  vegetarian: boolean = false;
  glutenFree: boolean = false;
  id: string = '';
  cuisinesEnum: Object = Cuisines;
  last_number_step: number = 0;

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

  addCuisine(cuisine: string) {
    if (this.recipe.cuisines.includes(cuisine)) {
      this.recipe.cuisines.splice(this.recipe.cuisines.indexOf(cuisine), 1);
    } else {
      this.recipe.cuisines.push(cuisine);
    }
  }

  getimageUrl() {
    var imagePipe = new UrlImagePipe();
    return imagePipe.transform(this.recipe);
  }

  addBlankStep() {
    this.last_number_step = this.last_number_step + 1;
    let step: Step = {
      number: this.last_number_step,
      ingredients: [],
      step: '',
    };
    this.recipe.steps?.push(step);
  }

  saveRecipe() {
    console.log(this.recipe);
    if (this.recipe.title.trim().length === 0) {
      return;
    } else if (this.recipe.summary.trim().length === 0) {
      return;
    }
    this.recipesService.addRecipe(this.recipe).subscribe((resp) => {
      console.log('Response: ', resp);
    });
  }
}
