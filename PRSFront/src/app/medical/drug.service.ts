import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

 
  constructor(private http: HttpClient) { }
  urlPost1 = "http://localhost:8989/Drug/post/data";
  urlPostAll = "http://localhost:8989/Drug/post/All/data";
  urlget1 = "http://localhost:8989/Drug/get/data";
  urlgetAll = "http://localhost:8989/Drug/get/All/data";
  urlupdate = "http://localhost:8989/Drug/update";
  
  urldelete1= "http://localhost:8989/Drug/delete";
  urldeleteAll = "http://localhost:8989/Drug/delete/all";
 
  // Drug operation
  DrugRegistration(DrugData: any) {
    console.log(DrugData);
    return this.http.post(this.urlPost1, DrugData);
  }
  // get All Drug
  getAllDrug() {
    return this.http.get(this.urlgetAll);
  }
  getDrugById(id:any) {
    return this.http.get(`${this.urlget1}/${id}`);
  }
  editDrug(DrugData: any) {
   // console.log(DrugData)
    return this.http.put(this.urlupdate, DrugData);
  }
  deleteDrug(DrugId: number) {
    // console.log("the Drug ID inside of the service is ",DrugId);
    return this.http.delete(`${this.urldelete1}/${DrugId}`);
  }
  deleteAllDrug() {
    // console.log("the Drug ID inside of the service is ",DrugId);
    return this.http.delete(this.urldeleteAll);
  }

}
