import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { PatientOperationComponent } from './patient-operation/patient-operation.component';
import{ ReactiveFormsModule} from '@angular/forms';
import { PatientSymptomComponent } from './patient-symptom/patient-symptom.component'



@NgModule({
  declarations: [
    ListPatientComponent,
    PatientOperationComponent,
    PatientSymptomComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  exports:[
    ListPatientComponent,
    PatientOperationComponent,
    PatientSymptomComponent
  ]
})
export class PatientModule { }
