import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})  //////// singletone
export class ApiService {

  constructor(private http : HttpClient, private err : ErrorService) { }


  baseUrl = "https://restaurant.stepprojects.ge/api/"   ///Baskets/GetAll    /// Products/GetAll

  // getData(url : string){
  //   return this.http.get(this.baseUrl + url).pipe(
  //      catchError(this.errorHandling)
  //   )
  // }
    getData(url : string){
    return this.http.get(url).pipe(
       catchError(this.errorHandling)
    )
  }


  postData(url : string, obj : any){
    return this.http.post(url, obj).pipe(
       catchError(this.errorHandling)
    )
  }


  private errorHandling (err : HttpErrorResponse) {
      return throwError(() => {
         this.err.showErr()
        Error("somethong went werog, try later")
        // alert("somethong went werog, try later")
       
      })
  }

}



// htttpClinet
