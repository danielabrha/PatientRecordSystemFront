import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugComponent } from './drug/drug.component';
import { OrderDrugComponent } from './order-drug/order-drug.component';
import{ ReactiveFormsModule,FormsModule} from '@angular/forms'

import {RouterModule} from '@angular/router'
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
    DataTablesModule,
    RouterModule,
    FormsModule
  ]
})
export class MedicalModule { }
