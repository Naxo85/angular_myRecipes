import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    // INFO: lazy load
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then((m) => m.RecipesModule),
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: 'recipes',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
