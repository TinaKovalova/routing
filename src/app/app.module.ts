import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DishComponent } from './dish/dish.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
