import { Component, Input } from '@angular/core';
import { Step } from '../../interfaces/recipes.interface';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styles: [],
})
export class StepComponent {
  @Input() step!: Step;
}
