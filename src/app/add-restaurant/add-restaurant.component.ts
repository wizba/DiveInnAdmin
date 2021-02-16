import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {
  mealForm:FormGroup;

  chips:any[] = ['test'];
  mealInfo:any={};
  constructor(public modalRef: MDBModalRef,private fb:FormBuilder) {}

  ngOnInit(): void {

    this.mealForm = this.fb.group({
      mealName:[],
      mealUrl:[],
      cost:[],
      content:[]
    });



    this.mealForm.valueChanges.subscribe(value =>{
      console.log(value);
    })
  }

  get content(){
    return this.mealForm.get('content');
  }
  

  addChip(chipText:string){
    this.chips.push(chipText);
  }

  removeChip(index:number){
    this.chips.splice(index,1)
  }

  saveToDatabase(){
    this.mealInfo = this.mealForm.value;
    this.mealInfo['contents'] = this.chips;
    console.log(this.mealInfo);
    this.mealForm.reset();
  }
}
