import { Pipe, PipeTransform } from '@angular/core';

import { Recipe } from '../interfaces/recipes.interface';

@Pipe({
  name: 'getUrlImage',
  pure: true, //by default is true, only is invoked when the argument received changes
})
export class UrlImagePipe implements PipeTransform {
  transform(recipe: Recipe | undefined): string {
    if (recipe == undefined) {
      return 'assets/images/no-image.png';
    }
    return recipe.url_image === undefined || recipe.url_image === ''
      ? 'assets/images/no-image.png'
      : `assets/images/${recipe.url_image}`;
  }
}
