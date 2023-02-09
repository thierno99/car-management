import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';
import { GetCarNamePipe } from './shared/pipe/get-car-name.pipe';
import { AddCarComponent } from './add-car/add-car.component';
import { FormCarComponent } from './form-car/form-car.component';
import { FormsModule } from '@angular/forms';
import { EditCarComponent } from './edit-car/edit-car.component';
import { ViewCarComponent } from './view-car/view-car.component';

const garageRoutes: Routes = [
  {path: 'edit/car/:id', component: EditCarComponent},
  {path: 'car/add', component: AddCarComponent},
  {path:'cars', component: CarListComponent},
  {path:'car/:id', component: ViewCarComponent},
]

@NgModule({
  declarations: [
    CarListComponent,
    GetCarNamePipe,
    AddCarComponent,
    FormCarComponent,
    EditCarComponent,
    ViewCarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(garageRoutes)
  ],
  exports: [
    GetCarNamePipe
  ]
})
export class GarageModule { }
