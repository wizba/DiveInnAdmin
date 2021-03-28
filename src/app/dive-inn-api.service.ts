import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Toaster } from 'ngx-toast-notifications';

@Injectable({
  providedIn: 'root'
})
export class DiveInnAPIService {
//url:any = 'http://localhost:3100/resturant';
newUrl:any = environment.URL;
resturant:any[] =[];
orders:any[] = [];
  constructor(private http:HttpClient,private router:Router,private toaster: Toaster) { }

  //get all reasturent
  getAllResturents(){
    return this.http.get(`${this.newUrl}/restuarant`);
  }

  //create reasturent
  postReasturents(reasturent:any){
    return this.http.post(`${this.newUrl}/restaurant`,reasturent);
  }

  //update reasturent
  putReasturents(reasturent:any,id:string){
    return this.http.put(`${this.newUrl}/${id}`,reasturent);
  }

  deleteResturent(id:any){
    return this.http.delete(`${this.newUrl}/restuarant/${id}`);
  }


  //get all resturents new api
  get_all_resturents(){
    return this.http.get(`${this.newUrl}/restuarant`);
  }

   //create reasturent
   post_manu(reasturent:any){
    return this.http.post(`${this.newUrl}/manu`,reasturent);
  }

  // create order
  create_order(order:any){
    return this.http.post(`${this.newUrl}/order`,order);
  }
  // specific reasturant with alln its orders
  getReasturant(id:any){
    return this.http.get(`${this.newUrl}/restuarant/${id}`);
  }


  //login
  login(reasturantData:any){
    console.log(reasturantData)
    
      this.http.get(`${this.newUrl}/restuarant/name/${reasturantData.restaurant}/id/${reasturantData.password}`)
      .subscribe((value)=>{
        if(value != 'error'){
          localStorage.setItem('reasturant',JSON.stringify(reasturantData));
        this.router.navigate(['/kitchen']);
      }    
        else
          {
            console.log('error occured');
          this.showToast('Unsuccessful','invalid name or password','danger');
        }
        
      },error=>{
        console.log(error);
        this.showToast('Unsuccessful','invalid name or password','danger');
        
      })
    
  }
  //for the auth guard
  isLoggedIn(){

    console.log(JSON.parse(localStorage.getItem('reasturant')));
    
    return localStorage.getItem('reasturant')
  }

  get my_reasturant(){
    return localStorage.getItem('reasturant');
  }

  //logout 
  logOut(){
    localStorage.clear()
  }

  reasturantData(reasturant){
    return this.http.get(`${this.newUrl}/restuarant/name/${JSON.parse(reasturant).restaurant}`);
  }

  updateOrder(order)
  {
    return this.http.put(`${this.newUrl}/resturants/order/${order._id}`,order);
  }

  showToast(title,body,color) {
    this.toaster.open({ text: body,
      caption: title,
      type:color ,
      position:'top-right'
    });
  }
}
