import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [HomeComponent, CreateComponent, DetailsComponent],
  imports: [CommonModule],
})
export class RecipesModule {}
