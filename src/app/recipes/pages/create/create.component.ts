import { Component } from '@angular/core';
import { Cuisines } from '../../interfaces/recipes.interface';

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
  vegetarian: boolean = false;
  glutenFree: boolean = false;

  id: string = '';

  cuisines: string[] = [];

  cuisinesEnum: Object = Cuisines;

  addCuisine(cuisine: string) {
    if (this.cuisines.includes(cuisine)) {
      this.cuisines.splice(this.cuisines.indexOf(cuisine), 1);
    } else {
      this.cuisines.push(cuisine);
    }
  }
}
