import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showrpoductdetails',
  templateUrl: './showrpoductdetails.component.html',
  styleUrls: ['./showrpoductdetails.component.css']
})
export class ShowrpoductdetailsComponent {

  constructor(private l:Location){}

  ngOnInit()
  {
    getValues()
    {
       let p :any=this.l.getState();
       console.log("In getValues Method")
      // console.log(p.productId);

    }
  }

}
function getValues() {
  throw new Error('Function not implemented.');
}

