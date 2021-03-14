import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  @Input('selectedStatus') selectedStatus;
  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedStatus);
  }
}
