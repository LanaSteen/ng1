import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Category, Product } from '../../Models/product';
import { TestService } from '../../Services/test.service';

@Component({
  selector: 'app-details',
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  constructor(private route : ActivatedRoute, private test : TestService  ){


     route.params.subscribe(data => {
      // console.log(data)
      // console.log(data['id'])
      // console.log(JSON.parse(JSON.stringify(data)).id)
      this.productid = data['id']

      this.productTitle = data['name']
      console.log(this.productTitle)
      console.log(this.productid)

      // console.log(this.productArr.filter(el => el.id == this.productid)[0])
      // this.productObj= this.productArr.filter(el => el.id == this.productid)[0]
     })

  }


  
     changeSignal(){
      this.test.up();
     }

  productid! : number
  productTitle!: string
  productObj : Product = new Product
  public x = 50




  //   productArr : Product[] = [
  //   {
  //     "id": 1,
  //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     "price": 109.95,
  //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     "category": Category.man,
  //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  //     "rating":  3.9,
  //   },
  //   {
  //     "id": 2,
  //     "title": "Mens Casual Premium Slim Fit T-Shirts ",
  //     "price": 22.3,
  //     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     "category": Category.man,
  //     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  //     "rating":  4.1,
  //   },
  //   {
  //     "id": 3,
  //     "title": "Mens Cotton Jacket",
  //     "price": 55.99,
  //     "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  //     "category":Category.woman,
  //     "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  //     "rating": 4.7
      
  //   },
  //   {
  //     "id": 4,
  //     "title": "Mens Casual Slim Fit",
  //     "price": 15.99,
  //     "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  //     "category": Category.woman,
  //     "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  //     "rating": 430
      
  //   },
  //   {
  //     "id": 5,
  //     "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  //     "price": 695,
  //     "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  //     "category": Category.man,
  //     "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
  //     "rating":  400
  //   }
    
  // ]
   
}


// ობსერვებალი  -  დაკვირვებადი 
// subscribe ჩასაფრება

// fetch()
// .then(resp => resp)