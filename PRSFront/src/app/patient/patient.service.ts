import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PatientService {

 
  constructor(private http: HttpClient) { }
  urlPost1 = "http://localhost:8989/Patient/post/data";
  urlPostAll = "http://localhost:8989/Patient/post/All/data";
  urlget1 = "http://localhost:8989/Patient/get/data";
  urlgetAll = "http://localhost:8989/Patient/get/All/data";
  urlupdate = "http://localhost:8989/Patient/update";
  
  urldelete1= "http://localhost:8989/Patient/delete";
  urldeleteAll = "http://localhost:8989/Patient/delete/all";
  url2 = "http://localhost:3000/PatientCard";
  // Patient operation
  PatientRegistration(PatientData: any) {
    console.log(PatientData);
    return this.http.post(this.urlPost1, PatientData);
  }
  // get All Patient
  getAllPatient() {
    return this.http.get(this.urlgetAll);
  }
  getPatientById(id:any) {
    return this.http.get(`${this.urlget1}/${id}`);
  }
  editPatient(PatientData: any) {
   // console.log(PatientData)
    return this.http.put(`${this.urlupdate}/${PatientData.patientId}`, PatientData);
  }
  deletePatient(PatientId: number) {
    // console.log("the Patient ID inside of the service is ",PatientId);
    return this.http.delete(`${this.urldelete1}/${PatientId}`);
  }
  deleteAllPatient() {
    // console.log("the Patient ID inside of the service is ",PatientId);
    return this.http.delete(this.urldeleteAll);
  }
  registerPatientCard(PatientCardData: any) {
    // if (PatientCardData !== null) {
      return this.http.post(this.url2,PatientCardData);
     // console.log("the data inside of the service ",PatientCardData);
    // }
    // return null;
  }
  getAllPatientCard(){
    return this.http.get(this.url2);
  }

}
