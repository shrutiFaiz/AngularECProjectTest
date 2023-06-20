import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FAQComponent } from './components/faq/faq.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'aboutus',component:AboutUsComponent
  },
  {
    path:'contactus',component:ContactUsComponent
  },
  {
    path:'FAQ',component:FAQComponent
  },
  {
    path:'pagenotfound',component:PageNotFoundComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },

  //------------------------------------------


  {
    path:'dash',component:DashboardComponent,children:[
  
  { path:'admin',loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule) },
  { path:'inventory',loadChildren:()=>import('./modules/inventory/inventory.module').then(m=>m.InventoryModule) }
  
]}


  //-------------------------------------






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
