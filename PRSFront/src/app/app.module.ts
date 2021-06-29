import { NgModule } from '@angular/core';
//import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { AppComponent } from './app.component';

import {SharedModule} from './shared/shared.module';
import {UserModule} from './user/user.module';
import {RoleModule} from '../app/role/role.module';
import {PatientModule} from './patient/patient.module';
import {LabModule} from './lab/lab.module';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    FormsModule,
    RoleModule,
    DataTablesModule,
    NgMultiSelectDropDownModule.forRoot(),
    PatientModule,
    LabModule
  ]
  // ,schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
