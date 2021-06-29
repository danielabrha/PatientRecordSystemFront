import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';
import { LabOrderComponent } from './lab-order/lab-order.component';
import { LabTestComponent } from './lab-test/lab-test.component';
import {DataTablesModule} from 'angular-datatables';
import{ ReactiveFormsModule,FormsModule} from '@angular/forms';
import { LabResultComponent } from './lab-result/lab-result.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LabResultListComponent } from './lab-result-list/lab-result-list.component';
@NgModule({
  declarations: [
    LabOrderComponent,
    LabTestComponent,
    LabResultComponent,
    LabResultListComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    LabOrderComponent,
    LabTestComponent,
    LabResultListComponent
  ]
})
export class LabModule { }
