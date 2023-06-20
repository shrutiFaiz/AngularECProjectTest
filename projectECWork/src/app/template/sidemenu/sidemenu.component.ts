import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoles } from 'src/app/model/user-roles';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {


  usertype: string;
  userRoles:Array<any>;

  constructor(private r:Router){}

  ngOnInit(): void {
    this.usertype=sessionStorage.getItem("usertype");
    this.userRoles=UserRoles.useroptions
  }

  navigateTo(path:string)
  {
       this.r.navigateByUrl("/dash/"+this.usertype+"/"+path);
  }

}
