import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  showErrOrNot = signal(false)
  showErr(){
    this.showErrOrNot.set(true)
  }
  hideErr(){
        this.showErrOrNot.set(false)
  }
}
