import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerViewpageComponent } from './customer-viewpage/customer-viewpage.component';
import { ShowrpoductdetailsComponent } from './showrpoductdetails/showrpoductdetails.component';

const routes: Routes = [
  {
    path:'',component:CustomerViewpageComponent
  },
  {
    path:'showdetails',component:ShowrpoductdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
