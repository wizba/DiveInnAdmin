import { Component, Input, OnInit } from '@angular/core';
import { DiveInnAPIService } from 'src/app/dive-inn-api.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  @Input('selectedStatus') selectedStatus;
  @Input('oders') orders;
  constructor(private diveInnAPI:DiveInnAPIService) { }

  ngOnInit(): void {
   
    
    this.getRestaurantData()
    console.log(this.diveInnAPI.orders);
  }


  //get Restaurant data 
  getRestaurantData(){

    
    if(this.diveInnAPI.my_reasturant)
    this.diveInnAPI.reasturantData(this.diveInnAPI.my_reasturant)
    .subscribe((value:any)=>{
      this.diveInnAPI.orders = value.orders;
      
    },error=>{
        alert('something went wrong')
    })
  }
}
