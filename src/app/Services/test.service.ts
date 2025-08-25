import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  testVar = signal(0)

  up(){
     this.testVar.update(val => val +1)
  }
   down(){
     this.testVar.update(val => val -1)
  }

}
