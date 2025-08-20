import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private http: ApiService, private router : Router){}


  phone!: string;
  password! :string;

  logIn(){
      this.http.postData("https://rentcar.stepprojects.ge/api/Users/login", {
        phoneNumber : this.phone,
        password : this.password
      }).subscribe((resp :any) => {
           console.log(resp)
           alert("Loged In Succesfully")
           localStorage.setItem("token", resp.token)
           this.router.navigateByUrl("/home")

      })

  }
}
