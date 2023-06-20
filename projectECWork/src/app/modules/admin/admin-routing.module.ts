import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { ViewDealerComponent } from './view-dealer/view-dealer.component';

const routes: Routes = [
  {
    path:'addEmployee',component:AddEmployeeComponent
  },
  {
    path:'viewEmployee',component:ViewEmployeeComponent
  },
  {
    path:'addDealer',component:AddDealerComponent
  },
  {
    path:'viewDealer',component:ViewDealerComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
