import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RecipesRoutingModule } from './recipes-routing.module';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  declarations: [HomeComponent, CreateComponent, DetailsComponent, ListComponent],
  imports: [CommonModule, RecipesRoutingModule, FlexLayoutModule, MaterialModule],
})
export class RecipesModule {}
