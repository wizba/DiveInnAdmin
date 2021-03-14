import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DiveInnAPIService {
url:any = 'http://localhost:3100/resturant';
newUrl:any = 'http://localhost:3000'
resturant:any[] =[];
  constructor(private http:HttpClient) { }

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
    return this.http.delete(`${this.newUrl}/${id}`);
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
}
