import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  loginform: FormGroup;
  constructor(private  fb: FormBuilder,
    private router:Router) {
    this.loginform = this.fb.group({
      'restaurant': ['',[Validators.required]],      
      'password': ['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }
  login(){
    
  }
}
