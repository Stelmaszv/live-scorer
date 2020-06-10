import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OntopComponent } from './components/start/ontop/ontop.component';
import { SectionsComponent } from './components/start/sections/sections.component';
import { AllNewsNavbarComponent } from './components/all-news-navbar/all-news-navbar.component';
import { ShowAllNewsInCompettionsNavbarComponent } from './components/show-all-news-in-compettions/show-all-news-in-compettions-navbar/show-all-news-in-compettions-navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    FooterComponent,
    OntopComponent,
    SectionsComponent,
    AllNewsNavbarComponent,
    ShowAllNewsInCompettionsNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
