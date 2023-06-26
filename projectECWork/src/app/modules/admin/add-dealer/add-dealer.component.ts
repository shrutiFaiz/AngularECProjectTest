import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DealerService } from 'src/app/shared/dealer.service';

@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.css']
})
export class AddDealerComponent implements OnInit{
  register: FormGroup
  currentStep: number=1;
  constructor(private fb:FormBuilder, private ds:DealerService, private r:Router){}

  ngOnInit()
  {
    this.register=this.fb.group({
      'dealerId':[],
      'dealerName':[''],
      'dealerEmail':[''],
      'dealerMobileNumber':[],
      'dealerAddress': this.fb.group({
        'addressId':[],
        'areaName':[''],
        'cityName':[''],
        'districtName':[''],
        'landMark':[''],
        'stateName':[''],
        'pinCodeNumber':['']
        
      }),
      'dealerBankDetails': this.fb.group({

       'bankAccountNumber':[],
       'bankName':[''],
       'branchName':[''],
       'ifscNumber':[],
       'cardNumber':[] })
    })
  }

  saveDealer(){
    console.log(this.register.value);
    this.ds.save(this.register.value).subscribe();
    }
    next(){
      this.currentStep++;
    }
    previous(){
      this.currentStep--;
    }




}
