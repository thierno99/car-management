import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, of, Observable } from 'rxjs';

import { Car, CarI } from './garage/shared/model/Car';
@Injectable({
  providedIn: 'root'
})
export class GarageService {
  private readonly API_URL = "http://localhost:8080";
  private readonly ENDPOINT_CARS = "/cars";
  private readonly _URL = this.API_URL.concat(this.ENDPOINT_CARS);
  constructor(
    private httpClient: HttpClient
  ) { }

  getCars () {
    return this.httpClient.get<CarI[]>(this._URL).pipe(
      // tap((car)=>console.log(car)),
      catchError((err)=>this.handleError(err,[]))
    ); 
  }

  getCarById(id: number): Observable<CarI>{
    return this.httpClient.get<CarI>(`${this.API_URL}/car/${id}`).pipe(
      // tap((res)=>console.table(res)),
      catchError((err)=>this.handleError(err,undefined))
    )
  }

  addCar(car: Car): Observable<CarI> {
    const httpOptions = {
      headers: new HttpHeaders({'content-Type':'application/json'})
    }
    return this.httpClient.post<CarI>(this._URL,car,httpOptions).pipe(
      // tap((res)=>console.table(res)),
      catchError((err)=>this.handleError(err,undefined))
    )
  }

  updateCar(car: CarI): Observable<CarI>{
    const httpOptions = {
      headers: new HttpHeaders({'content-Type':'application/json'})
    }
    return this.httpClient.put<CarI>(`${this.API_URL}/car/${car.id}`,car,httpOptions).pipe(
      catchError((err)=>this.handleError(err,undefined))
    )
  }

  deleteCarById(id: number):Observable<CarI> {
    return this.httpClient.delete<CarI>(`${this.API_URL}/car/${id}`).pipe(
      catchError((err)=>this.handleError(err,undefined))
    )
  }
  private handleError(err: Error, errValue: any){
    console.table(err);
    return of(errValue);
  }
}
