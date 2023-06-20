import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

   url:string="http://localhost:9095/login/getsingledata/";
  
  
  getuserbyusernameandpassword(username:string,password:string)
  {
     console.log(username,password);
       return this.http.get<User>(this.url+username+"/"+password);

  }


}
