import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerViewpageComponent } from './customer-viewpage/customer-viewpage.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowrpoductdetailsComponent } from './showrpoductdetails/showrpoductdetails.component';


@NgModule({
  declarations: [
    CustomerViewpageComponent,
    ShowrpoductdetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    RouterModule,
     ReactiveFormsModule
  ]
})
export class CustomerModule { }
