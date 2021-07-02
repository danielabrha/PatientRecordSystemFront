import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { PatientOperationComponent } from './patient-operation/patient-operation.component';
import{ ReactiveFormsModule,FormsModule} from '@angular/forms';
import { PatientSymptomComponent } from './patient-symptom/patient-symptom.component';
import { VisitComponent } from './visit/visit.component'



@NgModule({
  declarations: [
    ListPatientComponent,
    PatientOperationComponent,
    PatientSymptomComponent,
    VisitComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ListPatientComponent,
    PatientOperationComponent,
    PatientSymptomComponent,
    VisitComponent
  ]
})
export class PatientModule { }
