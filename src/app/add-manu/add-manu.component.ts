import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-add-manu',
  templateUrl: './add-manu.component.html',
  styleUrls: ['./add-manu.component.scss']
})
export class AddManuComponent implements OnInit {

  constructor(public modalRef: MDBModalRef) {}

  ngOnInit(): void {
  }

}
