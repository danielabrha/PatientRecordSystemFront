import { Component, OnInit } from '@angular/core';
import {PatientService} from '../patient.service';
import {PatientSymptomService} from '../patient-symptom.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-symptom',
  templateUrl: './patient-symptom.component.html',
  styleUrls: ['./patient-symptom.component.css']
})
export class PatientSymptomComponent implements OnInit {

  listSymptomOfPatient: any = [];
  listSymptomOfSelectedPatient: any = [];
  //{ id: Number, symptomName: String, patientId: Number, dateRegistered: Date }
  listPatient: any = [];
  selectedpatientId: number = 0;
  patientId: number = 0;
  symptom: string = '';
  isSelectedPatient: boolean = false;
  isSaveClicked: boolean = false;
  selectedPatient: string = '';
  symData: any = { id: Number, symptomName: String, patientId: Number, dateRegistered: Date }
  constructor(
    private patientService: PatientService,
    private patientSymService: PatientSymptomService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllPatient();

  }
  getAllPatient() {
    // this.patientService.getAllPatient().subscribe(res => {
    //   this.listPatient = res;
    // })
    // return this.listPatient;
  }
  onPatientSelect() {
    // this.isSelectedPatient = true;
    // this.listSymptomOfSelectedPatient = [];
    // let allPatient = this.getAllPatient();
    // let num: number;
    // let num2: number;
    // for (let patient of allPatient) {
    //   // console.log('p', patient.id);
    //   // console.log('s', this.selectedpatientId);
    //   num = patient.id;
    //   num2 = this.selectedpatientId;
    //   if (num == num2) {
    //     this.selectedPatient = patient.fName + " " + patient.lName;
    //     // console.log('selected', this.selectedPatient);
    //     this.getAllSymptomOfPatient();

    //     break;
    //   }
    // }

  }
  saveSymptom(isSaveAndExit: boolean) {

    // this.symData.dateRegistered = new Date();
    // this.symData.symptomName = this.symptom;
    // this.symData.patientId = ((Number)(this.selectedpatientId));
    // this.patientSymService.insertSymptom(this.symData).subscribe(res => {
    //   if (!isSaveAndExit) {
    //     this.symptom = '';
    //     this.getAllSymptomOfPatient();
    //   } else {
    //     this.router.navigate(['/case']);
    //   }
    //   // this.isSaveClicked=true;
    // });

    // // console.log('the symptom is', this.symptom);
    // // console.log('the selected patient', this.selectedpatientId);
  }
  getAllSymptomOfPatient() {
    // //let listSymptom:any=[];

    // this.patientSymService.getAllSymptom().subscribe(res => {
    //   console.log("inside of subscribe")
    //   this.listSymptomOfPatient = res;
    //   this.getSpecifedSymptom();
    // });
  }
  getSpecifedSymptom() {
    let num: number;
    let num2: number;
    console.log("inside of test function 1");
    console.log(this.listSymptomOfPatient);
    let counter = 0;
    this.listSymptomOfSelectedPatient = [];
    for (let patientSym of this.listSymptomOfPatient) {
      num = patientSym.patientId;
      num2 = this.selectedpatientId;
      console.log(num)
      console.log(num2)
      if (num == num2) {
        counter++;
        console.log("inside of test function 2", patientSym)
        this.listSymptomOfSelectedPatient.push(patientSym.symptomName);
      }
    }
    console.log('the total equqal is', counter);
  }
}
