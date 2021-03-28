import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DiveInnAPIService } from '../dive-inn-api.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  loginform: FormGroup;
  constructor(private  fb: FormBuilder,
    private router:Router,
    private diveInnAPI:DiveInnAPIService) {
    this.loginform = this.fb.group({
      'restaurant': ['',[Validators.required]],      
      'password': ['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }
  login(){
    this.diveInnAPI.login(this.loginform.value);
    this.loginform.reset();
  }

  get password(){
    return this.loginform.get('password')
  }

  get restaurant(){
    return this.loginform.get('restaurant')
  }


}
