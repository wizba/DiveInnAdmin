import { Component, OnInit } from "@angular/core";
import { MDBModalRef, MDBModalService } from "angular-bootstrap-md";
import { AddManuComponent } from "./add-manu/add-manu.component";
import { AddRestaurantComponent } from "./add-restaurant/add-restaurant.component";
import { DiveInnAPIService } from "./dive-inn-api.service";
import { Toaster } from "ngx-toast-notifications";
import { DataSharing } from "./services/dataSharing.service";
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
} from "@techiediaries/ngx-qrcode";
import { QrCodeModalComponent } from "./qr-code-modal/qr-code-modal.component";
import { Socket } from "ngx-socket-io";
import { map } from "rxjs/operators";
import { AuthService } from "./services/auth.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private socket: Socket,private API:DiveInnAPIService,private authService:AuthService) {}
  ngOnInit(): void {
   
  }

  getMessage() {
    return this.socket
      .fromEvent("message")
      .pipe(map((data) => console.log(data)))
      .subscribe()
  }

  getClientOrder() {
    return this.socket
      .fromEvent("clientOrder")
      .pipe(map((data:any) =>{ 

          this.API.create_order(data)
          .subscribe(async(value)=>{
            this.API.getReasturant(data.resturant)
            .subscribe(value=>{
              console.log(value)
            },error=>{
              console.error(error)
          })
        });

      }))
      .subscribe()
  }

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
