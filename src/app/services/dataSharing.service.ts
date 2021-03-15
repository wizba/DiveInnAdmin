import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharing {
    selectedMeal:any;
    public restaurantSubject = new BehaviorSubject({});
    constructor(){}
    setRestaurant(restaurant){
     return this.restaurantSubject.next(restaurant)
    }
}