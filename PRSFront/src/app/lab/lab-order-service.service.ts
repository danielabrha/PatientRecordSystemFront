import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabOrderServiceService {

  constructor(private http: HttpClient) { }
 
  urlPost1 = "http://localhost:8989/LabOrder/post/data";
  urlPostAll = "http://localhost:8989/LabOrder/post/All/data";
  urlget1 = "http://localhost:8989/LabOrder/get/data";
  urlgetAll = "http://localhost:8989/LabOrders/get/All/data";
  urlupdate = "http://localhost:8989/LabOrder/update";
  
  urldelete1= "http://localhost:8989/LabOrder/deleteById/data";
  urldeleteAll = "http://localhost:8989/LabOrder/deleteAll/data";
 
  // LabOrder operation
  LabOrderRegistration(visitId:any,labTestTypeId:any) {
     let x={};
    // let _=1;
    // let xx = {headers: new HttpHeaders({'Content-Type':  'application/json' })};
   return this.http.post(`${this.urlPost1}/${visitId}/${labTestTypeId}`, {});
  }
  // get All LabOrder
  getAllLabOrder() {
    return this.http.get(this.urlgetAll);
  }
  getLabOrderById(id:any) {
    return this.http.get(`${this.urlget1}/${id}`);
  }
  editLabOrder(LabOrderData: any) {
   // console.log(LabOrderData)
    return this.http.put(`${this.urlupdate}/${1}`, LabOrderData);
  }
  deleteLabOrder(LabOrderId: number) {
    // console.log("the LabOrder ID inside of the service is ",LabOrderId);
    return this.http.delete(`${this.urldelete1}/${LabOrderId}`);
  }
  deleteAllLabOrder() {
    // console.log("the LabOrder ID inside of the service is ",LabOrderId);
    return this.http.delete(this.urldeleteAll);
  }
}