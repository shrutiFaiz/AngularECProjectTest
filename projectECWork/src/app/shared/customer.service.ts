import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
geturl:string="http://localhost:9095/viewAllProduct";

  getAll()
  {
       return this.http.get<Product[]> (this.geturl);
  }

  getbycategoryurl:string="http://localhost:9095/searchByCategoryName";

  getbycategory(productCategory:string)
  {
    console.log("In customer service");
    console.log(productCategory);
    return this.http.get<Product[]> (this.getbycategoryurl+"/"+productCategory);
  }
}


