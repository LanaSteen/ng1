import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [ContactComponent, ProductDetailsComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {


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
