import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugComponent } from './drug/drug.component';
import { OrderDrugComponent } from './order-drug/order-drug.component';
import{ ReactiveFormsModule} from '@angular/forms'

import {DataTablesModule} from 'angular-datatables';
import { DrugOrderListComponent } from './drug-order-list/drug-order-list.component';

@NgModule({
  declarations: [
    DrugComponent,
    OrderDrugComponent,
    DrugOrderListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class MedicalModule { }
