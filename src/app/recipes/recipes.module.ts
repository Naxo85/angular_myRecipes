import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { RecipesRoutingModule } from './recipes-routing.module';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { UrlImagePipe } from './pipes/get-url-image.pipe';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { StepComponent } from './components/step/step.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    DetailsComponent,
    ListComponent,
    RecipeCardComponent,
    RecipeSearchComponent,
    UrlImagePipe,
    RecipeSearchComponent,
    EnumToArrayPipe,
    StepComponent,
  ],
  imports: [CommonModule, RecipesRoutingModule, FlexLayoutModule, MaterialModule, FormsModule],
})
export class RecipesModule {}
