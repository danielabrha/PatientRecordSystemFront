import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../user.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-system-user',
  templateUrl: './system-user.component.html',
  styleUrls: ['./system-user.component.css']
})
export class SystemUserComponent implements OnInit {
  listuser: any = [];
  isEdit = false;
  isSucessEdit = false;
  isDelete = false;
  userForm = new FormGroup({
    fName: new FormControl(''),
    id: new FormControl(''),
    lName: new FormControl(''),
    mName: new FormControl(''),
    gender: new FormControl(''),
    address: new FormControl(''),
    dateOfBirth: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  constructor() {

  }
  ngOnInit(): void {
  }
  exitMessage() {
    this.isSucessEdit = false;
    this.isSucessEdit=false;
  }
  deleteUserModal(content: any, id: number) {
    // // check patient first
    // let patientTemp = this.getPatientByID2(id);
    // if (patientTemp === null) {
    //   // no data to delete
    // } else {
    //   this.patient = patientTemp;
    // }
    // this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
    //   this.closeModal = `Closed with: ${res}`;
    // }, (res) => {
    //   this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    // });
  }
  userRegister() {
    // if (this.isEdit) {
    //   this.patientService.editPatient(this.patientForm.value).subscribe((result) => {

    //     this.patientForm.reset();
    //     this.isSucessEdit = true;
    //     this.isEdit = false;
    //     //this.listPatient.splice(id-1,1);
    //   })

    // } else {
    //   this.patientService.patientRegistration(this.patientForm.value).subscribe((result) => {
    //     this.patientForm.reset();
    //     //this.listPatient.splice(id-1,1);
    //   })

  //  }

  }
  deleteuserModal(content: any, id: number) {
    // check patient first
    // let patientTemp = this.getPatientByID2(id);
    // if (patientTemp === null) {
    //   // no data to delete
    // } else {
    //   this.patient = patientTemp;
    // }
    // this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
    //   this.closeModal = `Closed with: ${res}`;
    // }, (res) => {
    //   this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    // });
  }
  editUser(id: number) {
    // send request to service to get data
    // console.log("the Id arrive ");
    // let patientTemp = this.getPatientByID(id);
    // if (patientTemp === null) {
    //   return null;
    // } else {
    //   return patientTemp;
    // }

    // // populate the list with given list only

  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
