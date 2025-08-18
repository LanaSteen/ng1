import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Hotel } from '../../Models/hotel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  imports: [FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  constructor(private http : ApiService){

  }


  @Input() hotelId! : number

  @Output() fromChildInfo = new EventEmitter

  infoForParent = ""

  hotel : Hotel = new Hotel;

  ngOnInit(){
    console.log("on initidan")
  }
  ngOnChanges(){
   console.log("changed id from parent")
   this.http.getData(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${this.hotelId}`)
   .subscribe((resp : any) => {
    console.log(resp)
    this.hotel = resp
   })

  }




   sendToParent(){

    this.fromChildInfo.emit(this.infoForParent)
    
   }




  // 





}
