import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './garage/car-list/car-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'cars', pathMatch: 'full'},
  // {path:'**', component: CarListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
