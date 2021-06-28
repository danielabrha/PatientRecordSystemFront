import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/user";
  url2 = "http://localhost:3000/userCard";
  // user operation
  userRegistration(userData: any) {
    return this.http.post(this.url, userData);
    // console.log("the user data is ",userData)
  }
  // get All user
  getAlluser() {
    return this.http.get(this.url);
  }
  edituser(userData: any) {
    console.log(userData)
    return this.http.put(`${this.url}/${userData.id}`, userData);
  }
  deleteuser(userId: number) {
    // console.log("the user ID inside of the service is ",userId);
    return this.http.delete(`${this.url}/${userId}`);
  }
  registeruserCard(userCardData: any) {
    // if (userCardData !== null) {
      return this.http.post(this.url2,userCardData);
     // console.log("the data inside of the service ",userCardData);
    // }
    // return null;
  }
  getAlluserCard(){
    return this.http.get(this.url2);
  }

}
