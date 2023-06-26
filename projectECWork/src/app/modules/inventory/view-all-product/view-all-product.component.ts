import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/shared/product-service.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent {

  constructor(
    private r:Router,
    private ps:ProductServiceService
    ){}

    p : Product=
    {

      productId:0,
      productName:'',
      productCategory:'',
      productPrice:0,
      productAvailableCount:0,
      availableDealer:[
       {
                 dealerId:0,
                 dealerName:'',
                 dealerEmail:'',
                  dealerMobileNumber:0,
                  dealerAddress:{
                                  addressId:0,
                                  areaName:'',
                                  cityName:'',
                                  districtName:'',
                                  landMark:'',
                                  stateName:'',
                                  pinCodeNumber:0
                                },
                      dealerBankDetails:
                                          {
                                            bankName: '',
                                            branchName: '',
                                            ifscNumber: '',
                                            cardNumber: 0,
                                            bankAccountNumber: 0
                                          }
        
              }
              ],                      
                          
                productDetails:
                {
                                productDetailsId:0,
                                manufacturerName:'',
                                modelNumber:'',
                                productfeatures:{
                                  featureId: 0,
                                  featureName: '',
                                  featureValue: ''
                                }
                
                                       		    
                                          	
                      }

}

pList:Product[];

ngOnInit()
{
      //getProduct
      this.ps.get().subscribe(
        (p:Product[])=>{
          this.pList=p;
        }

      );
}



}
