import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { AddManuComponent } from './add-manu/add-manu.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { DiveInnAPIService } from './dive-inn-api.service';
import { Toaster } from 'ngx-toast-notifications';
import { DataSharing } from './services/dataSharing.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { QrCodeModalComponent } from './qr-code-modal/qr-code-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modalRef: MDBModalRef;
  searchText:string;
  inputForm:any={
    name:'',
    logo_url:'',
    openingTime:'',
    closingTime:''
  }

  editInputForm:any={
    name:'',
    logo_url:'',
    openingTime:'',
    closingTime:''
  }
  
  resturents:any[] =[];
  showModal:boolean = false;
  seletedResturant:any;
  
  constructor(private modalService: MDBModalService,
    private diveInnAPIService:DiveInnAPIService,
    private toaster: Toaster,
    private dataSharing:DataSharing) {}
  ngOnInit(): void {
    this.getAllResturents();
  }

  //this method opens the modal to allow the user to change manue data
  async openView(resturant?:any) {
    this.dataSharing.selectedMeal = await resturant;

    this.modalRef = this.modalService.show(AddRestaurantComponent, {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-side modal-top-right',
        containerClass: 'right',
        animated: true,
    });

  
  }

  async openManu(resturant?:any) {
    this.dataSharing.selectedMeal = await resturant;

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


  OpenCode(){
    this.modalRef = this.modalService.show(QrCodeModalComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-frame modal-bottom',
      containerClass: 'bottom',
      animated: true
  });
  }
  chanegedInput(date){
    return  this.inputForm.openingTime= new Date(date).getHours()+':'+new Date(date).getMinutes()+':'+new Date(date).getSeconds(); 
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
    this.diveInnAPIService.deleteResturent(id)
    .subscribe((data:any[])=>{
      this.resturents = data;
    })
  }


  showEditModal(editResturant?:any){

    
    if(editResturant != undefined){
      this.seletedResturant = editResturant
      console.log(this.seletedResturant)
    }
    else
      this.editInputForm.inputForm={
        name:'',
        logo_url:'',
        openingTime:'',
        closingTime:''
      }
    this.showModal = !this.showModal;
  }

  // used to update a certain resturant
  addEditedResturant(){
   let userId = this.seletedResturant._id;
   this.diveInnAPIService.putReasturents(this.editInputForm,userId)
   .subscribe((data:any[])=>{
    this.showToast('success','restaurant added','success');
    this.resturents = data;
    this.showEditModal();
   },err=>this.showToast('Un successful','update failed','danger'));
    
  }

  //QrCode componenet will start here
  QrCodes:any[] = [];
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'kfc';
  generateQrCode(){
   
    this.resturents.forEach((element,index )=> {
      this.QrCodes.push({
          elementType : NgxQrcodeElementTypes.URL,
          correctionLevel : NgxQrcodeErrorCorrectionLevels.HIGH,
          value:element.name
        })
    });
  }
}
