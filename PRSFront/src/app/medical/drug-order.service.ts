import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrugOrderOrderService {

 
  constructor(private http: HttpClient) { }
  urlPost1 = "http://localhost:8989/DrugOrder/post/data";
  urlPostAll = "http://localhost:8989/DrugOrder/post/All/data";
  urlget1 = "http://localhost:8989/DrugOrder/get/data";
  urlgetAll = "http://localhost:8989/DrugOrder/get/All/data";
  urlupdate = "http://localhost:8989/DrugOrder/update";
  
  urldelete1= "http://localhost:8989/DrugOrder/delete";
  urldeleteAll = "http://localhost:8989/DrugOrder/delete/all";
 
  // DrugOrder operation
  DrugOrderRegistration(visitId: any,drugId:any) {
  //  console.log(DrugOrderData);
    return this.http.post(`${this.urlPost1}/${visitId}/${drugId}`, {});
  }
  // get All DrugOrder
  getAllDrugOrder() {
    return this.http.get(this.urlgetAll);
  }
  getDrugOrderById(id:any) {
    return this.http.get(`${this.urlget1}/${id}`);
  }
  editDrugOrder(DrugOrderData: any) {
   // console.log(DrugOrderData)
    return this.http.put(this.urlupdate, DrugOrderData);
  }
  deleteDrugOrder(DrugOrderId: number) {
    // console.log("the DrugOrder ID inside of the service is ",DrugOrderId);
    return this.http.delete(`${this.urldelete1}/${DrugOrderId}`);
  }
  deleteAllDrugOrder() {
    // console.log("the DrugOrder ID inside of the service is ",DrugOrderId);
    return this.http.delete(this.urldeleteAll);
  }
}
