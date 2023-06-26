import { Injectable } from '@angular/core';
import { Dealer } from '../model/dealer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  url: string="http://localhost:9095/saveDealer"
  
  url1: string="http://localhost:9095/getDealer"

  constructor(private http: HttpClient ) { }

  save(p: Dealer)
  {
    alert("Data Save SucessFull")
    return this.http.post(this.url,p);
  }

  getAll()
  {
    return this.http.get(this.url1);
  }
}
