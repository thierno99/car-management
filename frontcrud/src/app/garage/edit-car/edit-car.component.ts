import { ActivatedRoute } from '@angular/router';
import { GarageService } from 'src/app/garage.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../shared/model/Car';

@Component({
  selector: 'app-edit-car',
  template: `
    <app-form-car
    [car]="car"
    ></app-form-car>
  `
})
export class EditCarComponent implements OnInit {

  car: Car | undefined;
  constructor(
    private garageService:GarageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.garageService.getCarById(+id).subscribe(c => this.car=c);
    }
  }

}
