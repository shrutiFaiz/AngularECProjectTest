import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { ViewDealerComponent } from './view-dealer/view-dealer.component';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    ViewEmployeeComponent,
    AddDealerComponent,
    ViewDealerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
