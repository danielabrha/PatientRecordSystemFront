import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(private http: HttpClient) { }
  urlPost1 = "http://localhost:8989/User/post/data";
  urlPostAll = "http://localhost:8989/User/post/All/data";
  urlget1 = "http://localhost:8989/User/get/data";
  urlgetAll = "http://localhost:8989/User/get/All/data";
  urlupdate = "http://localhost:8989/User/update";
  
  urldelete1= "http://localhost:8989/User/delete";
  urldeleteAll = "http://localhost:8989/User/delete/all";
  url2 = "http://localhost:3000/userCard";
  // user operation
  userRegistration(userData: any) {
    console.log(userData);
    return this.http.post(this.urlPost1, userData);
  }
  // get All user
  getAlluser() {
    return this.http.get(this.urlgetAll);
  }
  getUserById(id:any) {
    return this.http.get(`${this.urlget1}/${id}`);
  }
  edituser(userData: any) {
   // console.log(userData)
    return this.http.put(`${this.urlupdate}/${userData.userId}`, userData);
  }
  deleteuser(userId: number) {
    // console.log("the user ID inside of the service is ",userId);
    return this.http.delete(`${this.urldelete1}/${userId}`);
  }
  deleteAlluser() {
    // console.log("the user ID inside of the service is ",userId);
    return this.http.delete(this.urldeleteAll);
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
