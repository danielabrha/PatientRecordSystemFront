import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientSymptomService {

  constructor(private http: HttpClient) { }
  urlPost1 = "http://localhost:8989/Symptom/post/data";
  urlPostAll = "http://localhost:8989/Symptom/post/All/data";
  urlget1 = "http://localhost:8989/Symptom/get/data";
  urlgetAll = "http://localhost:8989/Symptom/Symptoms/get/All/data";
  urlupdate = "http://localhost:8989/Symptom/update";
  
  urldelete1= "http://localhost:8989/Symptom/deleteById/data";
  urldeleteAll = "http://localhost:8989/Symptom/deleteAll/data";
  // Symptom operation
  SymptomRegistration(SymptomData: any,visitId:any) {
    console.log(SymptomData);
    return this.http.post(`${this.urlPost1}/${visitId}`, SymptomData);
  }
  // get All Symptom
  getAllSymptom() {
    return this.http.get(this.urlgetAll);
  }
  getSymptomById(id:any) {
    return this.http.get(`${this.urlget1}/${id}`);
  }
  editSymptom(SymptomData: any) {
   // console.log(SymptomData)
    return this.http.put(`${this.urlupdate}/${SymptomData.patientId}`, SymptomData);
  }
  deleteSymptom(SymptomId: number) {
    // console.log("the Symptom ID inside of the service is ",SymptomId);
    return this.http.delete(`${this.urldelete1}/${SymptomId}`);
  }
  deleteAllSymptom() {
    // console.log("the Symptom ID inside of the service is ",SymptomId);
    return this.http.delete(this.urldeleteAll);
  }
}
