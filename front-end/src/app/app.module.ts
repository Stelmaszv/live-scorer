import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LenghtLimitPipePipe } from './pipe/lenght-limit-pipe.pipe';
import {Commom_Components} from './component inports/commom';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    Commom_Components,
    LenghtLimitPipePipe,
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
