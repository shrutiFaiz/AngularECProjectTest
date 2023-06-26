import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Dealer } from 'src/app/model/dealer';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/shared/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  regForm:FormGroup
  selectPhoto:any
  imageSrc:any;
  reader=new FileReader();

  constructor(private fb:FormBuilder,
              private r:Router,
              private ps:ProductServiceService
              
    ){}

    
    dealerList:Dealer[];
    
    ngOnInit()
    {
    this.regForm=this.fb.group(
      {
        productName:[],
        productCategory:[''],
        productPrice:[],
        productAvailableCount:[],
        'availableDealer':this.fb.array([this.createDealer()]),
        'productDetails':this.fb.group(
          {
              'productDetailsId':[],
              'manufacturerName':[''],
              'modelNumber':[],
              'productfeatures':this.fb.array([this.createProductFeatures()])
          }

        )
        
       }
    );
 
     //getDealer  
      this.ps.getDealer().subscribe(
        (d:Dealer[])=>{
          this.dealerList=d;
        }
      );


        
  
  }//ngOnInit End

  //addDealer
  addDealerUI(event : any)
  {
    console.log(event.target.value);
    let id : number = event.target.value;
    this.ps.getDealerByid(id).subscribe(
      (d : Dealer)=>{
        this.availableDealer.push(
          this.fb.group(
            {
              dealerId:d.dealerId,
              dealerName:d.dealerName,
              dealerEmail:d.dealerEmail,
              dealerMobileNumber:d.dealerMobileNumber,
	            dealerAddress:d.dealerAddress,
              dealerBankDetails:d.dealerBankDetails
            }
          )
        );
      }
    );
    
  }

  //END addDealer

  createDealer():FormGroup
  {
    return this.fb.group(
      {
             'dealerId':[],
            'dealerName':[''],
            'dealerEmail':[''],
            'dealerMobileNumber':[],
             'dealerAddress':this.fb.group(
              {
                'addressId':[],
                'areaName':[''],
                'cityName':[''],
                'districtName':[''],
                'landMark':[''],
                'stateName':[''],
                'pinCodeNumber':[]
              }
            ),
            'dealerBankDetails':this.fb.group(
              {
                  'bankAccountNumber':[],
                  'bankName':[''],
                  'branchName':[''],
                  'ifscNumber':[''],
                  'cardNumber':[]
              }
            )
      }

    )
  }

  createProductFeatures():FormGroup
  {
    return this.fb.group(
      {
          'featureId':[],
          'featureName':[''],
          'featureValue':['']
      }
      )
  }


  get productfeatures():FormArray
  {
    //return this.regForm.get('productfeatures') as FormArray;
    return this.regForm.controls['productDetails'].get('productfeatures') as FormArray

  }

  addproductfeatures()
  {
    return this.productfeatures.push(this.createProductFeatures());
  }

  get availableDealer():FormArray
  {
    return this.regForm.get('availableDealer') as FormArray;

  }

  addavailableDealer()
  {
    //return this.availableDealer.push(this.createDealer());
    return this.availableDealer.push(this.createDealer());
  }

  //save data product
  saveData()
  {
  let availableDealers:FormArray<any>= this.regForm.get('availableDealer') as FormArray ;
  if(availableDealers.at(0).get('dealerId').value==null)
  {
  availableDealers.removeAt(0);
  this.regForm.get('availableDealer').value==availableDealers;
  } 
  console.log("this.regForm.value")
  console.log(this.regForm.value);

  console.log("dealerId");
 // console.log(this.regForm.get('dealerId').value);
//////-------------------

 //converts  into json format
 var jsondata=JSON.stringify(this.regForm.value);
 console.log("jsondata"+jsondata);

 const formData=new FormData
  formData.append("photo",this.selectPhoto);
   formData.append("product",jsondata);

  this.ps.saveProduct(formData).subscribe();
   
    // this.r.navigateByUrl('list');
    alert("Product Saved Successfully");
    window.location.reload();
  }

  
  onchangePhoto(event:any)
  {
      console.log(event);
      this.selectPhoto=event.target.files[0];

      this.reader.onload=e=>this.imageSrc=this.reader.result;
      this.reader.readAsDataURL(this.selectPhoto);
  }

}
