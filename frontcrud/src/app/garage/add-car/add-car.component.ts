import { Car, CarI } from './../shared/model/Car';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-car',
  template:`
    <app-form-car
    [car]="car"
    ></app-form-car>
  `
})
export class AddCarComponent implements OnInit {
  car: Car | undefined;
  constructor() { }

  ngOnInit(): void {
    this.car=new Car();
  }

}
