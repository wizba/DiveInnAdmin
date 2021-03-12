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
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private socket: Socket) {}
  ngOnInit(): void {
    this.getMessage();
  }

  getMessage() {
    return this.socket
      .fromEvent("message")
      .pipe(map((data) => console.log(data)))
      .subscribe(data=>{
        console.log(data);
        
      })
  }
}
