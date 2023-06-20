import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private fb:FormBuilder,private r:Router,
    private ls:LoginService){}

  toRegister()
  {
    this.r.navigateByUrl("/register");
  }

  loginForm: FormGroup;
  

  u:User=
    {
          userId:0,
          userName:'',
          password:'',
          userType:''

    }
  
  
   ngOnInit(): void {
     
     this.loginForm=this.fb.group(
       {
            username:[],
            password:[]
       }
      )
  
  }
 
  onLogin()
  {
console.log(this.loginForm.value);


    this.ls.getuserbyusernameandpassword(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value).subscribe(
      (data:User)=>{
      if(data!=null){
  
     if(data.userType=="admin")
       {
         sessionStorage.setItem('usertype',data.userType);
           this.r.navigateByUrl("/dash");
       }
     else if(data.userType=="inventory")
     {
      sessionStorage.setItem('usertype',data.userType);
      this.r.navigateByUrl("/dash");
     }
      
      }
      else
      {
          alert("enter correct username and password.!")
      }
    }
      );
 
       }

  

}
