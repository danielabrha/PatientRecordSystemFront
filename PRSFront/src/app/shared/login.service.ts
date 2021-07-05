import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  urlPost1 = "http://localhost:8989/login";

  login(userData:any){
  return  this.http.get(this.urlPost1,userData);
  }
}
