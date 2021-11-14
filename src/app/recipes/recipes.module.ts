import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RecipesRoutingModule } from './recipes-routing.module';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { GetUrlImagePipe } from './pipes/get-url-image.pipe';

@NgModule({
  declarations: [HomeComponent, CreateComponent, DetailsComponent, ListComponent, RecipeCardComponent, GetUrlImagePipe],
  imports: [CommonModule, RecipesRoutingModule, FlexLayoutModule, MaterialModule],
})
export class RecipesModule {}
