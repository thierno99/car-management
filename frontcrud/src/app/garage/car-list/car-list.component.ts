import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GarageService } from 'src/app/garage.service';
import { Car, CarI } from '../shared/model/Car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html'
})
export class CarListComponent implements OnInit {

  
  cars: CarI[] | undefined;
  constructor(
    private garageService: GarageService,
    private router: Router
  ){}
  ngOnInit(): void {
    console.log("car-list started ...");
    this.garageService.getCars().subscribe((datas) => {
      this.cars = datas as CarI[]
    })
  }

  editCar(car:Car){
    this.router.navigate(['/edit/car',car.id]);
  }

  deleteCarById(car: CarI) {
    if(confirm(`Êtes vous sure de vouloir supprimer "${car.brand} ${car.model}" ?`))
      this.garageService.deleteCarById(car.id).subscribe(()=>this.goHome());
  }

  goHome() {
    window.location.reload();
    this.router.navigate(['/']);
  }
  goToViewCar(car: Car){
    this.router.navigate(['/car',car.id]);
  }

}
