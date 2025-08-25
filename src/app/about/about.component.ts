import { Component } from '@angular/core';
import { CommonFunctionService } from '../Services/common-function.service';
import { ApiService } from '../Services/api.service';
import { Category, Product } from '../Models/product';
import { CategoryProduct } from '../Models/category';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(
    private common : CommonFunctionService,
    private http : ApiService
        
  ){

  }

inputFromUSer! :string
 ngOnInit(){
    this.http.getData("https://restaurant.stepprojects.ge/api/Categories/GetAll")
    .subscribe((resp : any) =>{
      console.log(resp)
      this.categoryArr = resp

      console.log(this.categoryArr)

    })

 }



  printhi(){
    this.common.greeting()
   
  }


 categoryArr : CategoryProduct[] = []



   addToCart(){
    this.http.postData("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", {
        "quantity": 50,
        "price": 10000,
        "productId": 1
    }).subscribe(resp => console.log(resp))

   }





}
