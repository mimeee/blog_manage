import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from 'rxjs';
import { AppConfig } from './config/app.config';

// route
const routes: Routes = [
  {
    path: AppConfig.routes.list,
    loadChildren: './blog-list/blog-list.module#BlogListModule'
  },
  {
    path: '',
    redirectTo: AppConfig.routes.list,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
