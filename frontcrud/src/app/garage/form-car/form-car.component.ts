import { GarageService } from 'src/app/garage.service';
import { CarI, Color } from './../shared/model/Car';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-car',
  templateUrl: './form-car.component.html'
})
export class FormCarComponent implements OnInit {

  @Input()
  car: CarI | undefined;
  isAddForm: boolean =false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private garageService:GarageService
  ) { }

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add'); 
  }

  loadFile(){
    let picture = document.getElementById('picture');
    if(picture){
      picture.click();
      picture.addEventListener('change',(e)=>{
        const imgDest = document.getElementById('img-dest')as HTMLIFrameElement;
        const plusBtn = document.querySelector('.add');

        if(imgDest && plusBtn){
          if(!plusBtn.classList.contains('hide')){
            plusBtn.classList.add('hide');
            imgDest.classList.remove('hide');
            
            
          }
          
          if(imgDest.classList.contains('hide')){
            imgDest.classList.remove('hide');
            plusBtn.classList.add('hide');
          }
          
          imgDest.src ="/assets/Images/"+((e.target as HTMLInputElement).files as FileList)[0].name;
          if(this.car)
            this.car.picture = ((e.target as HTMLInputElement).files as FileList)[0].name;

        }

      })
    }
  }

  selectColor($event: Event, color: string){
    // if(this.car){
    //   const checked = ($event.target as HTMLInputElement).checked;
    //   if(checked)
    //     this.car.colors.push(color.toUpperCase() as unknown as Color);
    //   else
    //     this.car.colors.splice(this.car.colors.indexOf(color as unknown as Color),1);
    // }
  }
  onSubmit() {
    if(this.car){

        if(this.isAddForm){
          this.garageService.addCar(this.car).subscribe(()=>{
            console.log("car added ...");
            this.router.navigate(['/cars']);
          })
        }else{
          this.garageService.updateCar(this.car).subscribe(()=>{
            console.log("car edited ...");
            this.router.navigate(['/cars']);
          })
        }
    }

  }
}
