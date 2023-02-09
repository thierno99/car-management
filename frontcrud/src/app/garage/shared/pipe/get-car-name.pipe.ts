import { CarI } from './../model/Car';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCarName'
})
export class GetCarNamePipe implements PipeTransform {

  transform(car: CarI): string {
    return car.brand.concat(' ').concat(car.model);
  }

}
