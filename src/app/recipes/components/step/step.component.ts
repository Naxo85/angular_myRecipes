import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Step, Ingredient } from '../../interfaces/recipes.interface';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styles: [],
})
export class StepComponent implements OnInit {
  ngOnInit(): void {
    let firstIngredient = true;
    this.step.ingredients.forEach((ingredient) => {
      if (firstIngredient) {
        firstIngredient = false;
      } else {
        this.updatedIngredients = this.updatedIngredients + ', ';
      }
      this.updatedIngredients = this.updatedIngredients + ingredient.name;
    });
  }

  @Input() step!: Step;

  updatedIngredients: string = '';

  editIngredients() {
    let ingredientsArray = this.updatedIngredients.split(',');
    ingredientsArray = ingredientsArray.map((ingredient) => ingredient.trim());
    //Deleting ingredients first
    this.step.ingredients.forEach((ingredient, index, array) => {
      if (!ingredientsArray.includes(ingredient.name)) {
        array.splice(index, 1);
      }
    });
    //Adding ingredients after
    ingredientsArray.forEach((ingredientInArray) => {
      if (ingredientInArray !== '') {
        let addIngredient: boolean = true;
        this.step.ingredients.forEach((ingredient) => {
          if (ingredient.name === ingredientInArray) {
            addIngredient = false;
            return;
          }
        });
        if (addIngredient) {
          let newIngredient: Ingredient = {
            name: ingredientInArray.toLowerCase(),
            image: 'toUpdate',
          };
          this.step.ingredients.push(newIngredient);
        }
      }
    });
  }
}
