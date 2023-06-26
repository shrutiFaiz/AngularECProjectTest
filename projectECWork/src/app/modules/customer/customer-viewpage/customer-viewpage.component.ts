import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-customer-viewpage',
  templateUrl: './customer-viewpage.component.html',
  styleUrls: ['./customer-viewpage.component.css']
})
export class CustomerViewpageComponent {
search: any;

  constructor(
    private r:Router,
    private cs:CustomerService
    ){}

    pList:Product[];

ngOnInit()
{
      //getProduct
      this.cs.getAll().subscribe(
        (p:Product[])=>{
          this.pList=p;
          console.log(this.pList);
          //console.log(pli);
          
        }

      );
}

searchProductByCategory()
{

  console.log("In searchProductByCategory ");
  console.log(this.search);
  
  this.cs.getbycategory(this.search).subscribe(
    (p:Product[])=>{
      this.pList=p;
      console.log("category list");
      console.log(this.pList);}
  );

}

 
reset()
{
  window.location.reload();
}


onClickImage(prodid:number)
{
  console.log("onClickImage ProductID");
    console.log(prodid);
}

}
