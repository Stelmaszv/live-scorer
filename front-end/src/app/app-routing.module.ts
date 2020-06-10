import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { AllNewsInCategoryComponent } from './components/all-news-in-category/all-news-in-category.component';
import { ShowAllNewsInCompettionsComponent } from './components/show-all-news-in-compettions/show-all-news-in-compettions.component';


const routes: Routes = [
  { path:'' , component:StartComponent},
  { path:'show_all_news/:category' , component:AllNewsInCategoryComponent},
  { path:'show_all_news_in_compettions/:compettion' , component:ShowAllNewsInCompettionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[StartComponent,AllNewsInCategoryComponent,ShowAllNewsInCompettionsComponent]
