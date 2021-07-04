import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabResultService {

  
  constructor(private http: HttpClient) { }
 
  urlPost1 = "http://localhost:8989/LabResult/post/data";
  urlPostAll = "http://localhost:8989/LabResult/post/All/data";
  urlget1 = "http://localhost:8989/LabResult/get/data";
  urlgetAll = "http://localhost:8989/LabResults/get/All/data";
  urlupdate = "http://localhost:8989/LabResult/update/data";
  
  urldelete1= "http://localhost:8989/LabResult/deleteById/data";
  urldeleteAll = "http://localhost:8989/LabResult/deleteAll/data";
 
  // LabResult operation
  LabResultRegistration(postedData:any,labOrderId:any) {
    // let x={};
    // let _=1;
    // let xx = {headers: new HttpHeaders({'Content-Type':  'application/json' })};
   return this.http.post(`${this.urlPost1}/${labOrderId}`, {"labResultName":postedData});
  }
  // get All LabResult
  getAllLabResult() {
    return this.http.get(this.urlgetAll);
  }
  getLabResultById(id:any) {
    return this.http.get(`${this.urlget1}/${id}`);
  }
  editLabResult(LabResultData: any) {
   // console.log(LabResultData)
    return this.http.put(`${this.urlupdate}/${1}`, LabResultData);
  }
  deleteLabResult(LabResultId: number) {
    // console.log("the LabResult ID inside of the service is ",LabResultId);
    return this.http.delete(`${this.urldelete1}/${LabResultId}`);
  }
  deleteAllLabResult() {
    // console.log("the LabResult ID inside of the service is ",LabResultId);
    return this.http.delete(this.urldeleteAll);
  }}