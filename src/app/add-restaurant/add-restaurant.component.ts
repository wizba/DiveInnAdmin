import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MDBModalRef } from 'angular-bootstrap-md';
import { DiveInnAPIService } from '../dive-inn-api.service';
import { DataSharing } from '../services/dataSharing.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {
  mealForm:FormGroup;

  chips:any[] = [];
  mealInfo:any={};
  constructor(public modalRef: MDBModalRef,
    private fb:FormBuilder,
    private diveInnAPIService:DiveInnAPIService,
    private dataSharing:DataSharing) {}

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

    console.log(this.dataSharing.selectedMeal);
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
    this.dataSharing.selectedMeal.manue.push( this.mealInfo)
    // update in the database
   this.diveInnAPIService.putReasturents(this.dataSharing.selectedMeal,this.dataSharing.selectedMeal._id)
   .subscribe(data =>console.log(data),err=>console.error(err));
   //clear the form once you done
    this.mealForm.reset();
    //clear the chips
    this.chips =[];
  }
}
