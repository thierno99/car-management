import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GarageService } from './garage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'frontcrud';
  constructor(
    private router: Router,
  ){}
  goHome(){
    this.router.navigate(['/']);
  }
  goAddcar(){
    this.router.navigate(['/car/add'])
  }
}
