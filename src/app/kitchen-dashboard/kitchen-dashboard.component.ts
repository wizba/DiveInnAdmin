import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { DiveInnAPIService } from '../dive-inn-api.service';
import { DataSharing } from '../services/dataSharing.service';
import { PreparingComponent } from './preparing/preparing.component';

@Component({
  selector: 'app-kitchen-dashboard',
  templateUrl: './kitchen-dashboard.component.html',
  styleUrls: ['./kitchen-dashboard.component.scss']
})
export class KitchenDashboardComponent implements OnInit,OnDestroy {

  selectedPage:any[]=[true,false,false];
  statusFilter:string="pending";
  orders:any[] =[];


  
  constructor(private diveInnAPI:DiveInnAPIService,
    private dataSharing:DataSharing,
    private socket: Socket ){
     
    }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    this.getClientOrderFromSokcet()
   this.getRestaurantData();

   
  }

  getClientOrderFromSokcet() {
    return this.socket
      .fromEvent("clientOrder")
      .pipe(map((data:any) =>{ 

          this.diveInnAPI.create_order(data)
          .subscribe(async(value)=>{
            this.diveInnAPI.getReasturant(data.resturant)
            .subscribe((value:any)=>{
              console.log(value)
              this.diveInnAPI.orders = value.orders;
              this.filterByStatus('pending');
            },error=>{
              console.error(error)
          })
        });

      }))
      .subscribe()
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

  //get Restaurant data 
  getRestaurantData(){
    if(this.diveInnAPI.my_reasturant)
    this.diveInnAPI.reasturantData(this.diveInnAPI.my_reasturant)
    .subscribe((value:any)=>{
      this.diveInnAPI.orders = value.orders;
      this.filterByStatus('pending');
    },error=>{
        alert('something went wrong');
    })
  }

  filterByStatus(status){
   this.orders = this.diveInnAPI.orders
   .filter(order=> order.status == status );
   console.log(this.orders)
  }
/**
 * 
 * @param index 
 * @param status 
 */
  changeStatus(status:string,index?:number){
    // switch status of the card
    let previousStatus ='';
    if(status == 'pending')
    {
      previousStatus =status;
      status = 'preparing';
      this.orders[index].status = status;
      //save to db
      this.updateOrderPending(this.orders[index],previousStatus)
        //send message to the phone
       this.socket.emit('progress',{
        header:'please wait ,while we ',
        statusMessage:'still preparing your order',
        status :status,
        progress:0.5,
        color:'danger',
        ShowButton:false
      });
      this.pending();
    }else
    if(status == 'preparing')
    {
      previousStatus =status;
      status = 'done';
      this.orders[index].status = status;
      this.socket.emit('progress',{
        header:'please wait ,while we ',
        statusMessage:'bringing your order',
        status :status,
        progress:1,
        color:'success',
        ShowButton:true
      });
      //save to db
      this.updateOrderPending(this.orders[index],previousStatus)
       //send message to the phone
       //save to db
    
      this.preparing()
    }else
    if(status == 'done'){
      previousStatus =status;
      status = 'done';

      this.orders[index].status = status;
      //save to db
      this.updateOrderPending(this.orders[index],previousStatus)
      //send message to the phone
      //this.socket.emit('progress',status);

      //button should be disbaled
      this.socket.emit('progress',{
        header:'please wait ,while we ',
        statusMessage:'bringing your order',
        status :status
      });
       this.done()
    }
     
  }

  //switches the status to pending and filters by it
  pending(){
    this.filterByStatus('pending');
  }

  //switches the status to preparing and filters by it
  preparing(){
    this.filterByStatus('preparing');
  }
  //switches the status to done and filters by it
  done(){
    this.filterByStatus('done');
  }

  /**
   * 
   * @param order 
   */
  updateOrderPending(order,status){
    this.diveInnAPI.updateOrder(order)
    .subscribe(async(value:any)=>{
      this.diveInnAPI.orders =await value.orders;
      console.log(this.diveInnAPI.orders)
      this.filterByStatus(status);
    },error=>{
        alert('something went wrong');
    })
  }

  
}
