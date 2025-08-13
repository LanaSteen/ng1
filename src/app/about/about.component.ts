import { Component } from '@angular/core';
import { CommonFunctionService } from '../Services/common-function.service';
import { ApiService } from '../Services/api.service';
import { Category, Product } from '../Models/product';
import { CategoryProduct } from '../Models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(
    private common : CommonFunctionService,
    private http : ApiService
        
  ){

  }


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





}
