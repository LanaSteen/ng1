import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Hotel } from '../Models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelApiService {

  constructor(private api : ApiService) { }

  hotel! : Hotel

  getHotelData(url : string){
    this.api.getData(url).subscribe((resp: any) => {
        console.log(resp);
        this.hotel = resp;
      });
  }


  




}
