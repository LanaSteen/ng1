import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private http : ApiService, private router : Router){

  }

 password! : string;
 phone!:string;

  register(){
      
      this.http.postData("https://rentcar.stepprojects.ge/api/Users/register", {
        phoneNumber : this.phone,
        password : this.password
      }).subscribe((resp :any) => {
           console.log(resp)
           alert("Registered Succesfully")
           this.router.navigateByUrl("/login")

      })

  }


}