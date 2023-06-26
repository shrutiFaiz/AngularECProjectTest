import { Component } from '@angular/core';
import { Dealer } from 'src/app/model/dealer';
import { DealerService } from 'src/app/shared/dealer.service';

@Component({
  selector: 'app-view-dealer',
  templateUrl: './view-dealer.component.html',
  styleUrls: ['./view-dealer.component.css']
})
export class ViewDealerComponent {

  pList: Dealer[];

constructor(private cs: DealerService){}

ngOnInit()
{ 
  this.cs.getAll().subscribe(
    (data: Dealer[])=>{
      this.pList=data
    }
  )
}

}
