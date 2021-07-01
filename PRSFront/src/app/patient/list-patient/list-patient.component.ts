import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
  patientForm = new FormGroup({
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
  // datatable propertis
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  listPatient: any = [];
  // modal variables
  closeModal: any;
  // variables
  operationEable: boolean = false;
  isSucessEdit: boolean = false;
  isSuccessRegister: boolean = false;
  patient: any;
  isForEdit: boolean = false;
  constructor(private _patientService: PatientService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getListPatient();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  addNewPatient(content: any) {
    this.operationEable = true;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: "patientModal" }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
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
  savePatient(patient: any) {
    console.log(patient.value);
    this._patientService.PatientRegistration(patient.value).subscribe(res => {
      this.modalService.dismissAll();
      this.getListPatient();
      this.isSuccessRegister = true;
    })


  }
  getListPatient() {
    this._patientService.getAllPatient().subscribe(res => {
      this.listPatient = res;
    })
  }
  exitMessage() {
    this.isSucessEdit = false;
    this.isSuccessRegister = false;
  }
  confirmeDelete(id: any) {
    this._patientService.deletePatient(id).subscribe(res => {
      this.getListPatient();
      this.modalService.dismissAll();

    })
  }
  editPatient(content: any, id: any) {
    this.operationEable = true;
    this.isForEdit = true;
    this._patientService.getPatientById(id).subscribe(res => {
      this.patient = res;
      this.patientForm = new FormGroup({
        fName: new FormControl(this.patient.fName),
        patientId: new FormControl(this.patient.patientId),
        lName: new FormControl(this.patient.lName),
        mName: new FormControl(this.patient.mName),
        gender: new FormControl(this.patient.gender),
        address: new FormControl(this.patient.address),
        dateOfBirth: new FormControl(this.patient.dateOfBirth),
        email: new FormControl(this.patient.email),
        phoneNumber: new FormControl(this.patient.phoneNumber)
      });
    })
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: "patientModal" }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  patientUpdate() {
    console.log(this.patientForm.value);
    this._patientService.editPatient(this.patientForm.value).subscribe(res => {
      this.modalService.dismissAll();
      this.isSucessEdit = true;
      this.getListPatient();
    })
  }
  deletePatient(content: any, id: any) {
    this.operationEable = true;
    this._patientService.getPatientById(id).subscribe(res => {
      this.patient = res;
    })
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: "patientModal" }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
}
