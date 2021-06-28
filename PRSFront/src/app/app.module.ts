import { NgModule } from '@angular/core';
//import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SharedModule} from './shared/shared.module';
import {UserModule} from './user/user.module';
import {RoleModule} from '../app/role/role.module'
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
    NgMultiSelectDropDownModule.forRoot()
  ]
  // ,schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
