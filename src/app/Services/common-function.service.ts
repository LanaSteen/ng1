import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionService {

  constructor() { }

  

  print(){
    console.log("hi")
  }

  greeting(){
    alert("Hello")
  }
  


}
