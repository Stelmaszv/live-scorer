import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { AllNewsInCategoryComponent } from './components/all-news-in-category/all-news-in-category.component';

const routes: Routes = [
  { path:'' , component:StartComponent},
  { path:'show_all_news/:category' , component:AllNewsInCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[StartComponent,AllNewsInCategoryComponent]
