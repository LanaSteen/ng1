import { Component } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [RouterModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

  constructor(private x : Router){

  }
  title = "name"
  goHome(){
     this.x.navigateByUrl('home')
  }
  ////  პროგრამიბილითი --დან როუტინგი
}
