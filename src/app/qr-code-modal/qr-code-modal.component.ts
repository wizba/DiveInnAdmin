import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { MDBModalRef } from 'angular-bootstrap-md';
import { DiveInnAPIService } from '../dive-inn-api.service';

@Component({
  selector: 'app-qr-code-modal',
  templateUrl: './qr-code-modal.component.html',
  styleUrls: ['./qr-code-modal.component.scss']
})
export class QrCodeModalComponent {
  resturents:any[] =[];

  //QrCode componenet will start here
  QrCodes:any[] = [];
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'kfc';
  constructor(public modalRef: MDBModalRef,private diveInnAPIService:DiveInnAPIService) {
    this.getAllResturents();
  }

 
  getAllResturents(){
    this.diveInnAPIService.getAllResturents()
    .subscribe((data:any[])=>{
        this.resturents = data;
        console.log(data);
    })
  }
}
