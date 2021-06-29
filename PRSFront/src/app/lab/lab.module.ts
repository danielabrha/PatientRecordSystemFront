import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabOrderComponent } from './lab-order/lab-order.component';
import { LabTestComponent } from './lab-test/lab-test.component';
import {DataTablesModule} from 'angular-datatables';
import{ ReactiveFormsModule,FormsModule} from '@angular/forms';
import { LabResultComponent } from './lab-result/lab-result.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  declarations: [
    LabOrderComponent,
    LabTestComponent,
    LabResultComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    FormsModule
  ],
  exports:[
    LabOrderComponent,
    LabTestComponent
  ]
})
export class LabModule { }
