import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Gender, User } from '../Models/user';


@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  // title : string | number | boolean | null | object | undefined = 200
  // title : any

  userName = ""
  userNameShow =""

  userObj = new User
  userArr : User[] =[]


  save(){
    console.log(this.userName);
    this.userNameShow = this.userName
  }


  liveSearch(){
    console.log(this.userName)
  }


  saveObj(){
    this.userObj.gender = Gender.male
    this.userArr.push(this.userObj)
    this.userObj = new User
    console.log(this.userArr)
  }
}



