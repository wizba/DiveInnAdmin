import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-dashboard',
  templateUrl: './kitchen-dashboard.component.html',
  styleUrls: ['./kitchen-dashboard.component.scss']
})
export class KitchenDashboardComponent implements OnInit {

  selectedPage:any[]=[true,false,false];
  statusFilter:string="pending";

  constructor() { }

  ngOnInit(): void {
  }

  selectPage(status:string,selectedIndex:number){
    
    this.selectedPage.forEach((element,index:number) => {
      if(selectedIndex == index){
        this.selectedPage[index] = true;
      }else{
        this.selectedPage[index] = false;
      }
      
    });
  }
}
