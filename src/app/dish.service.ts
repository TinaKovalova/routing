import { Injectable } from '@angular/core';
import {DISHES} from "./DISHES";
import {Dish} from "./Dish";
import {Observable,of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DishService {

  getDishes():Observable<Dish[]>{
    return of(DISHES)
  }
  getDish(id:number):Observable<Dish>{
    return of(DISHES.find((d)=>d.id===id)!)
  }
}
