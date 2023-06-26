import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dealer } from '../model/dealer';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
 

  getdealerURL:string="http://localhost:9095/getDealer"
getDealer()
  {
    return this.http.get<Dealer[]>(this.getdealerURL);

  }


getDealerByidURL:string="http://localhost:9095/getDealerById/"
  getDealerByid(id : number)
  {
    return this.http.get<Dealer>(this.getDealerByidURL+id);

  }

addProductURL:string="http://localhost:9095/addProduct"
saveProduct(p:any)
{
  console.log("ProductInfo");
  console.log(p);
   return this.http.post(this.addProductURL,p);
}


getProductURL="http://localhost:9095/getProduct"

get()
  {
    return this.http.get<Product[]>(this.getProductURL);
  }



}
