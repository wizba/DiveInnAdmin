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
    return this.http.get(this.url);
  }

  //create reasturent
  postReasturents(reasturent:any){
    return this.http.post(this.url,reasturent);
  }

  //update reasturent
  putReasturents(reasturent:any,id:string){
    return this.http.put(`${this.url}/${id}`,reasturent);
  }

  deleteResturent(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }


  //get all resturents new api
  get_all_resturents(){
    return this.http.get(`${this.newUrl}/restuarant`);
  }

   //create reasturent
   post_manu(reasturent:any){
    return this.http.post(`${this.newUrl}/manu`,reasturent);
  }

}
