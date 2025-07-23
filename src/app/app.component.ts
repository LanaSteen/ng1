import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { count } from "rxjs";
import { CommonModule } from "@angular/common";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {

  titleColor = {
    'color' : "blue",
    'font-style' : 'italic'
  }
  hint = "შეიყვანე პაროლი"
  title = 'ჩემი პირველი ანგულარ აპლიკაცია';  /// string

  clickCount = 1
  inputType ="password"

  x = 10  ///// number
  y : string = ""
  
  imgUrl2 ="https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2glMjBhcHB8ZW58MHx8MHx8fDA%3D"
  imgUrl1 = "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  imgUrl = "https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2glMjBhcHB8ZW58MHx8MHx8fDA%3D"
  
  isActive = false

  fun(num1:number){
      console.log(num1)
  }


  // show(){
  //   this.clickCount++
  //   if(this.clickCount%2==0){
  //     this.imgUrl = this.imgUrl1
  //   }
  //   else {
  //      this.imgUrl = this.imgUrl2
  //   }
  // }


   show(){
    this.imgWidth == 300 ? this.imgWidth = 500 : this.imgWidth = 300
    this.toggle()
    this.imgUrl == "https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2glMjBhcHB8ZW58MHx8MHx8fDA%3D" 
    ? this.imgUrl ="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
    : this.imgUrl =  "https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2glMjBhcHB8ZW58MHx8MHx8fDA%3D"
  }


  imgWidth = 300

  z = 1

  toggle(){
    this.z == 1 ? this.z=0 : this.z = 1
    console.log(this.z)
  }
  
  
 change(){
  this.titleColor['color']="green"
   this.titleColor['font-style']=""
  this.title ="ჩვენი მეორე აპლიკაცია"
  this.hint = "შეიყვანე იმეილი"
  this.inputType = "email"
 }
}










