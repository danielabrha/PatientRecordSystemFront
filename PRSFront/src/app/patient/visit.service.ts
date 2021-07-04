import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  constructor(private http: HttpClient) { }
  urlPost1 = "http://localhost:8989/Visit/post/data";
  urlPostAll = "http://localhost:8989/Visit/post/All/data";
  urlget1 = "http://localhost:8989/Visit/get/data";
  urlgetAll = "http://localhost:8989/Visits/get/All/data";
  urlupdate = "http://localhost:8989/Visit/update";
  
  urldelete1= "http://localhost:8989/Visit/delete";
  urldeleteAll = "http://localhost:8989/Visit/delete/all";
  url2 = "http://localhost:3000/VisitCard";
  // Visit operation
  VisitRegistration(VisitData: any) {
    console.log(VisitData);
    let x={};
    return this.http.post(`${this.urlPost1}/${VisitData}`, x);
  }
  // get All Visit
  getAllVisit() {
    return this.http.get(this.urlgetAll);
  }
  getVisitById(id:any) {
    return this.http.get(`${this.urlget1}/${id}`);
  }
  editVisit(VisitData: any) {
   // console.log(VisitData)
    return this.http.put(`${this.urlupdate}/${VisitData.VisitId}`, VisitData);
  }
  deleteVisit(VisitId: number) {
    // console.log("the Visit ID inside of the service is ",VisitId);
    return this.http.delete(`${this.urldelete1}/${VisitId}`);
  }
  deleteAllVisit() {
    // console.log("the Visit ID inside of the service is ",VisitId);
    return this.http.delete(this.urldeleteAll);
  }
  registerVisitCard(VisitCardData: any) {
    // if (VisitCardData !== null) {
      return this.http.post(this.url2,VisitCardData);
     // console.log("the data inside of the service ",VisitCardData);
    // }
    // return null;
  }
  getAllVisitCard(){
    return this.http.get(this.url2);
  }
}