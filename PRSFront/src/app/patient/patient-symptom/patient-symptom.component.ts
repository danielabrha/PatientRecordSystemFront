import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { PatientSymptomService } from '../patient-symptom.service'
import { Router } from '@angular/router';
import { VisitService } from '../visit.service';
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
  listVisit: any = [];
  selectedVisits: any = [];
  isVisitSelected: boolean = false;
  selectedSingleVisit: any = "";

  listSymptomGivenVisit: any = [];
  listOfSymptom: any = [];
  symptomObje: any = {};

  latestVisitPatient: any;
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
    private visitService: VisitService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllPatient();
    this.getAllSymptom();
  }
  getAllPatient() {
    this.selectedVisits = [];
    this.visitService.getAllVisit().subscribe(res => {
      this.listVisit = res;
      console.log("list visit",res);
      for (let pvisit of this.listVisit) {
        let latestVistDate = pvisit.visitDate;
        this.latestVisitPatient = pvisit;
        let inside = false;
        for (let visit of this.listVisit) {
          if (pvisit.patient.cardRecordNumber == visit.patient.cardRecordNumber) {
            console.log("outer")
            if (latestVistDate > visit.visitDate) {
              inside = true;
              latestVistDate = visit.visitDate;
              this.latestVisitPatient = visit;
              console.log("inside of", this.latestVisitPatient);
            }

          }
        }
        if (inside)
          this.selectedVisits.push(this.latestVisitPatient);
      }
    })
    // console.log(this.selectedVisits);
    return this.listPatient;
  }
  async onPatientSelect() {
    this.isVisitSelected = true;
    for (let visit of this.listVisit) {
      if (visit.visitId == this.selectedpatientId) {
        this.selectedSingleVisit = visit;
        break;
      }
    }
    await this.getSelectedSymptom();
  }
  async getSelectedSymptom() {
    await this.getAllSymptom();
    this.listSymptomGivenVisit = [];
    for (let symptom of this.listOfSymptom) {
      if (symptom.visit.visitId == this.selectedpatientId) {
        this.listSymptomGivenVisit.push(symptom);
      }
    }
  }
  getAllSymptom() {
    this.patientSymService.getAllSymptom().subscribe(res => {
      this.listOfSymptom = res;
    });
  }
  editSymptom(sympId: any) {

  }
  deleteSymptom(sympId: any) {
    this.patientSymService.deleteSymptom(sympId).subscribe(res => {
      this.getSelectedSymptom();
    })
  }
  async saveSymptom() {

    this.symptomObje.symptomName = this.symptom;
    this.patientSymService.SymptomRegistration(this.symptomObje, this.selectedpatientId).subscribe(async res => {
      // await  this.getAllSymptom();
      this.symptom = "";
      await this.getSelectedSymptom();
    })
  }

}
