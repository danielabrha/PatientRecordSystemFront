import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabTestService {

  constructor(private http: HttpClient) { }
 
  urlPost1 = "http://localhost:8989/LabTestType/post/data";
  urlPostAll = "http://localhost:8989/LabTestType/post/All/data";
  urlget1 = "http://localhost:8989/LabTestType/get/data";
  urlgetAll = "http://localhost:8989/LabTestType/get/All/data";
  urlupdate = "http://localhost:8989/LabTestType/update";
  
  urldelete1= "http://localhost:8989/LabTestType/delete";
  urldeleteAll = "http://localhost:8989/LabTestType/delete/all";
 
  // LabTestType operation
  LabTestTypeRegistration(LabTestTypeData: any) {
    console.log(LabTestTypeData);
    // let _=1;
    // let xx = {headers: new HttpHeaders({'Content-Type':  'application/json' })};
   return this.http.post(this.urlPost1, LabTestTypeData);
  }
  // get All LabTestType
  getAllLabTestType() {
    return this.http.get(this.urlgetAll);
  }
  getLabTestTypeById(id:any) {
    return this.http.get(`${this.urlget1}/${id}`);
  }
  editLabTestType(LabTestTypeData: any) {
   // console.log(LabTestTypeData)
    return this.http.put(`${this.urlupdate}/${1}`, LabTestTypeData);
  }
  deleteLabTestType(LabTestTypeId: number) {
    // console.log("the LabTestType ID inside of the service is ",LabTestTypeId);
    return this.http.delete(`${this.urldelete1}/${LabTestTypeId}`);
  }
  deleteAllLabTestType() {
    // console.log("the LabTestType ID inside of the service is ",LabTestTypeId);
    return this.http.delete(this.urldeleteAll);
  }

}
