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
  ],
  imports: [CommonModule, RecipesRoutingModule, FlexLayoutModule, MaterialModule, FormsModule],
})
export class RecipesModule {}
