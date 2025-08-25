import { CommonModule } from '@angular/common';
import { Component, computed, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private auth : AuthService){
    
    this.isAuthorized = computed(() => this.auth.isAuth() )
  }

  isAuthorized! : any

 ngOnInit(){
  
   if( localStorage.getItem("token")){
    this.isAuth =true
   }

 }

 isAuth = false
 showMobileMenu = false

 active = "active"

 showHide(){
   this.showMobileMenu == false ?  this.showMobileMenu = true :  this.showMobileMenu = false
 }

 logOut(){
  localStorage.removeItem("token")

  this.auth.logOut()
 }
}
