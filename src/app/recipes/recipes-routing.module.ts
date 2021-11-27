import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '', // '/recipes'
    component: HomeComponent,
    children: [
      {
        path: '', // '/recipes'
        component: ListComponent,
      },
      {
        path: 'create', // '/recipes/create'
        component: CreateComponent,
      },
      {
        path: 'details/:id', // '/recipes/details'
        component: DetailsComponent,
      },
      {
        path: 'list', // '/recipes/list'
        component: ListComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
