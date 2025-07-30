import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 showMobileMenu = false

 active = "active"

 showHide(){
   this.showMobileMenu == false ?  this.showMobileMenu = true :  this.showMobileMenu = false
 }
}
