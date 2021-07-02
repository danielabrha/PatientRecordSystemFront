import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }
  urlPost1 = "http://localhost:8989/Role/post/data";
  urlPostAll = "http://localhost:8989/Role/Role/post/All/data";
  urlget1 = "http://localhost:8989/Role/get/data";
  urlgetAll = "http://localhost:8989/Role/get/All/data";
  urlupdate = "http://localhost:8989/Role/update";
  
  urldelete1= "http://localhost:8989/Role/delete";
  urldeleteAll = "http://localhost:8989/Role/delete/all";
  url2 = "http://localhost:3000/RoleCard";
  // Role operation
  RoleRegistration(RoleData: any) {
    
    return this.http.post(this.urlPost1, RoleData);
  }
  // get All Role
  getAllRole() {
    return this.http.get(this.urlgetAll);
  }
  getRoleById(id:any) {
    return this.http.get(`${this.urlget1}/${id}`);
  }
  editRole(RoleData: any) {
   // console.log(RoleData)
    return this.http.put(`${this.urlupdate}/${RoleData.roleId}`, RoleData);
  }
  deleteRole(RoleId: number) {
    // console.log("the Role ID inside of the service is ",RoleId);
    return this.http.delete(`${this.urldelete1}/${RoleId}`);
  }
  deleteAllRole() {
    // console.log("the Role ID inside of the service is ",RoleId);
    return this.http.delete(this.urldeleteAll);
  }
}
