import { Component, signal } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [ContactComponent, ProductDetailsComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {


  constructor(private router : Router){
  }



  curentDate = new Date()

  counter = signal(0)
  plus(){
    this.counter.update(val => val+1)
  }
  minus(){
    if(this.counter()>=1){
       this.counter.update(val => val-1)
    }
  }

  reset(){
     this.counter.set(0)
  }





  // ngOnInit(){
  //   if(localStorage.getItem("token") == undefined || localStorage.getItem("token") == null  ){
  //       this.router.navigateByUrl("/login")
  //   }
  // }  //// ეს ცუდი ვარიანტია

  isVisible = false;
  hotelIdFromParent! : number
  innoFromchild! : string;

  showDetails(id :number){
     this.isVisible = true
     console.log(id)
     this.hotelIdFromParent = id
  }


  childSentInfo(userInput : string){
    console.log(userInput)

    this.innoFromchild = userInput
  }

}
