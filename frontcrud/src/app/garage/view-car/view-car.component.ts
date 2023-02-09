import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GarageService } from 'src/app/garage.service';
import { Car } from '../shared/model/Car';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})
export class ViewCarComponent implements OnInit {
  car: Car | undefined;
  constructor(
    private garageService:GarageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.garageService.getCarById(+id).subscribe(c => this.car=c);
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
