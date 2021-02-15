import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { AddManuComponent } from './add-manu/add-manu.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { DiveInnAPIService } from './dive-inn-api.service';
import { Toaster } from 'ngx-toast-notifications';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modalRef: MDBModalRef;

  inputForm:any={
    name:'',
    logo_url:'',
    openingTime:'',
    closingTime:''
  }
  resturents:any[] =[];
  constructor(private modalService: MDBModalService,
    private diveInnAPIService:DiveInnAPIService,
    private toaster: Toaster) {}
  ngOnInit(): void {
    this.getAllResturents();
  }

  //this method opens the modal to allow the user to change manue data
  openView() {
    this.modalRef = this.modalService.show(AddRestaurantComponent, {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-side modal-top-right',
        containerClass: 'right',
        animated: true
    });
  }

  openManu() {
    this.modalRef = this.modalService.show(AddManuComponent, {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-side modal-top-right',
        containerClass: 'right',
        animated: true
    });
  }


  chanegedInput(date){
    
    return  this.inputForm.openingTime= new Date(date).getHours()+':'+new Date(date).getMinutes()+':'+new Date(date).getSeconds(); 
   
     //this.inputForm.closingTime= new Date(date).getHours()+':'+new Date(date).getMinutes()+':'+new Date(date).getSeconds(); 
  }
  
  addResturant(){
  
 if(this.inputForm.openingTime !=''&& this.inputForm.name != ''&& this.inputForm.logo_url !='' && this.inputForm.closingTime !='')
    this.diveInnAPIService.postReasturents(this.inputForm)
    .subscribe((data:any[])=>{
    
      this.showToast('success','restaurant added','success');
      this.resturents = data;
    },error=>{
      console.log(error.message)
      this.showToast('not added',error.message,'danger');
    })
    
    this.inputForm={
      name:'',
      logo_url:'',
      openingTime:'',
      closingTime:''
    }
  }
getAllResturents(){
  this.diveInnAPIService.getAllResturents()
  .subscribe((data:any[])=>{
      this.resturents = data;
      console.log(data);
  })
}
  showToast(title,body,color) {
    this.toaster.open({ text: body,
      caption: title,
      type:color ,
      position:'top-right'
    });
  }

  delete(id:any){
    console.log(id);

    this.diveInnAPIService.deleteResturent(id)
    .subscribe((data:any[])=>{
      this.resturents = data;
    })
  }
}
