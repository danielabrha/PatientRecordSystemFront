import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/shared/login/login.component'
import { SystemUserComponent } from '../app/user/system-user/system-user.component';
import {UsermanagementComponent} from '../app/user/usermanagement/usermanagement.component';
import {ManageRoleComponent} from '../app/role/manage-role/manage-role.component';
import {UserRoleComponent} from '../app/role/user-role/user-role.component'
const routes: Routes = [
  {
    path: 'user',
    component: SystemUserComponent
  },
  {
    path: 'user/manage',
    component: UsermanagementComponent
  },

  {
    path: 'role',
    component: ManageRoleComponent
  },
  {
    path: 'userrole',
    component: UserRoleComponent
  },
  // {
  //   path: 'role/manage',
  //   component: ManagUserRoleComponent
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**', redirectTo: '/user', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
