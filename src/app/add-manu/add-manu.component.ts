import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { DiveInnAPIService } from '../dive-inn-api.service';
import { DataSharing } from '../services/dataSharing.service';

@Component({
  selector: 'app-add-manu',
  templateUrl: './add-manu.component.html',
  styleUrls: ['./add-manu.component.scss']
})
export class AddManuComponent implements OnInit {

  manu:any[] =[];
  name ='';
  constructor(public modalRef: MDBModalRef,
    private diveInnAPIService:DiveInnAPIService,
    private dataSharing:DataSharing) {
      
    this.manu = this.dataSharing.selectedMeal.manu;
    this.name=this.dataSharing.selectedMeal.name;

    console.log(this.manu);
  }
  ngOnInit(): void { }

 
}
