import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../Dish";
import {DishService} from "../dish.service";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  dishes:Dish[]=[]


  constructor(private  dishService:DishService) {}

  ngOnInit(): void {
    this.getDishes()
  }
  getDishes():void{
    this.dishService.getDishes()
      .subscribe((dishes)=>this.dishes=dishes)
  }

}
