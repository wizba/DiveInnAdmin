import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DiveInnAPIService } from 'src/app/dive-inn-api.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  @Input('selectedStatus') selectedStatus;
  @Input('oders') orders;
  constructor(private API:DiveInnAPIService) { }

  ngOnInit(): void {
    
    
    console.log( this.API.orders);
  }

  //get Restaurant data 
  getRestaurantData(){
    if(this.API.my_reasturant)
    this.API.reasturantData(this.API.my_reasturant)
    .subscribe((value:any)=>{
      this.API.orders = value.orders;
      
    },error=>{
        alert('something went wrong')
    })
  }

}
