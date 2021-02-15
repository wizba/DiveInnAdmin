
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AddManuComponent } from './add-manu/add-manu.component';
import {HttpClientModule} from '@angular/common/http';
import { ToastNotificationsModule } from 'ngx-toast-notifications';

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    AddManuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
      OwlDateTimeModule, 
      OwlNativeDateTimeModule,
      HttpClientModule,
      ToastNotificationsModule
  ],
  providers: [],
  entryComponents: [ AddRestaurantComponent,AddManuComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
