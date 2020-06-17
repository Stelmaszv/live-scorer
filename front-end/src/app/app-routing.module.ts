import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/commom/start/start.component';
import { AllNewsInCategoryComponent } from './components/sections/all-news-in-category/all-news-in-category.component';
import { ShowAllNewsInCompettionsComponent } from './components/sections/show-all-news-in-compettions/show-all-news-in-compettions.component';
import { GetNewsComponent } from './components/sections/get-news/get-news.component'

const routes: Routes = [
  { path:'' , component:StartComponent},
  { path:'show_all_news/:category' , component:AllNewsInCategoryComponent},
  { path:'show_all_news_in_compettions/:compettion' , component:ShowAllNewsInCompettionsComponent},
  { path:'get_news/:id' , component:GetNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[StartComponent,AllNewsInCategoryComponent,ShowAllNewsInCompettionsComponent,GetNewsComponent]
