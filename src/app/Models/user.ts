export class User {
  // userName? : string
  // userName! : string
  userName = '';
  age!: number;
  password!: string;
  email!: string;
  phone?: string;
  imgUrl! : string;
  gender! : Gender
}


export enum Gender {
  male = "male",
  female = "female",
  other = "other"
}



