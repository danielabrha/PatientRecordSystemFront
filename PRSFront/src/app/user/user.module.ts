import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { SystemUserComponent } from './system-user/system-user.component';

import{ ReactiveFormsModule} from '@angular/forms'
import {SharedModule} from '../shared/shared.module';
import { UsermanagementComponent } from './usermanagement/usermanagement.component'

@NgModule({
  declarations: [
    SystemUserComponent,
    UsermanagementComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    SystemUserComponent,
    UsermanagementComponent
  ]
})
export class UserModule { }
