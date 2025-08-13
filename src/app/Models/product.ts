


  // "id": 1,
  // "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  // "price": 109.95,
  // "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  // "category": "men's clothing",
  // "rating": 3.9





export class Product {
  id! : number;
  title! : string;
  price! : number;
  description! : string;
  category! : Category;
  image! : string;
  rating! : number
}

export enum Category{
  man = "men's clothing",
  woman = "women's clothing"
}




