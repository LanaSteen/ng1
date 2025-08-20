import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private api : ApiService) { }

  getRoomData(url : string){
    this.api.getData(url)
  }
}
