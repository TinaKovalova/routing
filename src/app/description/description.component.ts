import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../Dish";
import {ActivatedRoute} from "@angular/router";
import {DishService} from "../dish.service";
/*import {resetTempProgramHandlerForTest} from "@angular/compiler-cli/src/transformers/program";*/

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() dishDescription?:Dish

  constructor(
    private route:ActivatedRoute,
    private dishService:DishService/*,
    private location:Location*/) { }

  ngOnInit(): void {
    this.getDish()
  }

  getDish():void{

    const id= Number(this.route.snapshot.paramMap.get('id'))
    this.dishService.getDish(id).subscribe(dish=>this.dishDescription=dish)
  }

}
