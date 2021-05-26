import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DishComponent} from "../dish/dish.component";
import {DescriptionComponent} from "../description/description.component";
const routes:Routes=[
 // {path:'',redirectTo:'', pathMatch:'full'},
  {path:'dish', component: DishComponent},
  {path:'description/:id',component:DescriptionComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
