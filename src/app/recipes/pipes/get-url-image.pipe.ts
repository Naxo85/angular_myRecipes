import { Pipe, PipeTransform } from '@angular/core';

import { Recipe } from '../interfaces/recipes.interface';

@Pipe({
  name: 'getUrlImage',
})
export class GetUrlImagePipe implements PipeTransform {
  transform(recipe: Recipe): string {
    return recipe.url_image === undefined
      ? 'assets/images/no-image.png'
      : `assets/images/${recipe.url_image}`;
  }
}
