
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
import { DataSharing } from './services/dataSharing.service';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { QrCodeModalComponent } from './qr-code-modal/qr-code-modal.component';
import { NgSearchPipe } from 'ng-search-pipe';
import { KitchenComponent } from './kitchen/kitchen.component';
import { KitchenDashboardComponent } from './kitchen-dashboard/kitchen-dashboard.component';
import { AppRoutingModule } from './app.routing';
import { AdminComponent } from './admin/admin.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { PendingComponent } from './kitchen-dashboard/pending/pending.component';
import { PreparingComponent } from './kitchen-dashboard/preparing/preparing.component';
import { DoneComponent } from './kitchen-dashboard/done/done.component';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    AddManuComponent,
    QrCodeModalComponent,
    KitchenComponent,
    KitchenDashboardComponent,
    AdminComponent,
    PendingComponent,
    PreparingComponent,
    DoneComponent
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
    ToastNotificationsModule,
    NgxQRCodeModule,
    NgSearchPipe,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [DataSharing],
  entryComponents: [ AddManuComponent,AddRestaurantComponent,QrCodeModalComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
