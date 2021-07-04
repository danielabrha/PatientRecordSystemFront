import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/shared/login/login.component'
import { SystemUserComponent } from '../app/user/system-user/system-user.component';
import {UsermanagementComponent} from '../app/user/usermanagement/usermanagement.component';
import {ManageRoleComponent} from '../app/role/manage-role/manage-role.component';
import {UserRoleComponent} from '../app/role/user-role/user-role.component'
import { ListPatientComponent} from './patient/list-patient/list-patient.component';
import {PatientSymptomComponent} from './patient/patient-symptom/patient-symptom.component';
import {LabOrderComponent} from './lab/lab-order/lab-order.component';
import {LabTestComponent} from './lab/lab-test/lab-test.component';
import {LabResultListComponent} from './lab/lab-result-list/lab-result-list.component';
import { LabResultComponent } from './lab/lab-result/lab-result.component';
import {DrugComponent} from './medical/drug/drug.component';
import {VisitComponent} from './patient/visit/visit.component';
import {DrugOrderListComponent} from './medical/drug-order-list/drug-order-list.component';
import { OrderDrugComponent } from './medical/order-drug/order-drug.component';
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
  {
    path: 'Patient/list',
    component: ListPatientComponent
  },
  {
    path: 'patient/symptom',
    component: PatientSymptomComponent
  },
  {
    path: 'patient/visit',
    component: VisitComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'lab/labOrder',
    component: LabOrderComponent
  },
  {
    path: 'lab/labTest',
    component: LabTestComponent
  },
  {
    path: 'lab/labResult',
    component: LabResultListComponent
  },
  {
    path: 'add/lab/labResult',
    component: LabResultComponent
  },
  {
    path: 'drug',
    component: DrugComponent
  },
  {
    path: 'drug/order/list',
    component: DrugOrderListComponent
  },
  {
    path: 'patient/drug/order',
    component: OrderDrugComponent
  },
  {
    path: '**', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
