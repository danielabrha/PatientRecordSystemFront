import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import{ ReactiveFormsModule,FormsModule} from '@angular/forms';
import { UserRoleComponent } from './user-role/user-role.component'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    ManageRoleComponent,
    UserRoleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),DataTablesModule
  ],
  exports:[
    ManageRoleComponent,
    UserRoleComponent
  ]
})
export class RoleModule {

  
 }
