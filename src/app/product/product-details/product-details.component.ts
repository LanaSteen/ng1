import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Hotel } from '../../Models/hotel';
import { FormsModule } from '@angular/forms';
import { HotelApiService } from '../../Services/hotel-api.service';

@Component({
  selector: 'app-product-details',
  imports: [FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  constructor(private hotelApi: HotelApiService) {}

  @Input() hotelId!: number;

  @Output() fromChildInfo = new EventEmitter();

  infoForParent = '';

  hotel: Hotel = new Hotel();

  ngOnInit() {
    console.log('on initidan');
  }
  ngOnChanges() {
    console.log('changed id from parent');
    this.hotelApi.getHotelData(
        `https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${this.hotelId}`
      )
      this.hotel = this.hotelApi.hotel
  }

  sendToParent() {
    this.fromChildInfo.emit(this.infoForParent);
  }

  //
}
