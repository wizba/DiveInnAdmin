import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  @Input('selectedStatus') selectedStatus;
  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedStatus);
  }

}
