import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { SystemUserComponent } from './system-user/system-user.component';
import {DataTablesModule} from 'angular-datatables';
import{ ReactiveFormsModule} from '@angular/forms'
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { UsermanagementComponent } from './usermanagement/usermanagement.component'
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    SystemUserComponent,
    UsermanagementComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    DataTablesModule,
    NgbModule,
    FormsModule,HttpClientModule
  ],
  exports:[
    SystemUserComponent,
    UsermanagementComponent
  ]
})
export class UserModule { }
