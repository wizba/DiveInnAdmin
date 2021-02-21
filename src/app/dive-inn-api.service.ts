import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DiveInnAPIService {
url:any = 'http://192.168.43.97:3000/resturant';

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
}
