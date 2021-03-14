import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preparing',
  templateUrl: './preparing.component.html',
  styleUrls: ['./preparing.component.scss']
})
export class PreparingComponent implements OnInit {

  @Input('selectedStatus') selectedStatus;
  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedStatus);
  }

}
