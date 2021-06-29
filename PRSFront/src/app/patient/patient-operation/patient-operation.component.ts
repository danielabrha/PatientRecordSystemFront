import { Component, OnInit , Output,EventEmitter,Input} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-patient-operation',
  templateUrl: './patient-operation.component.html',
  styleUrls: ['./patient-operation.component.css']
})
export class PatientOperationComponent implements OnInit {
  @Output() patient:EventEmitter<any> =new EventEmitter();
  patientForm = new FormGroup({
    fName: new FormControl(''),
    id: new FormControl(''),
    lName: new FormControl(''),
    mName: new FormControl(''),
    gender: new FormControl(''),
    address: new FormControl(''),
    dateOfBirth: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }
  patientRegister(){
    this.patient.emit(this.patientForm);
  }
}
