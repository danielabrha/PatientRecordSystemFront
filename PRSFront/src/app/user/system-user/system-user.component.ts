import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service'
import { Router } from '@angular/router'
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
declare var $: (arg0: any) => any;
@Component({
  selector: 'app-system-user',
  templateUrl: './system-user.component.html',
  styleUrls: ['./system-user.component.css']
})
export class SystemUserComponent implements OnInit, AfterViewInit {
  // modal here
  closeModal: any;
  // variable
  listuser: any = [];
  isEdit = false;
  isSucessEdit = false;
  isSuccessRegister = false;
  isDelete = false;
  model: any;
  // datatable
  @ViewChild('dataTable', { static: false }) table: any;
  dataTable: any;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective | undefined;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  title = 'datatables';
  date: any;
  showContent = false;
  user: any;
  // dtOptions: DataTables.Settings = {};
  userForm = new FormGroup({
    fName: new FormControl(''),
    userId: new FormControl(''),
    lName: new FormControl(''),
    mName: new FormControl(''),
    gender: new FormControl(''),
    address: new FormControl(''),
    dateOfBirth: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  constructor(private _userService: UserService, private modalService: NgbModal) {

  }

  ngOnInit(): void {

    this.listuser = [];
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.getListUser();
  }
  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }
  userRegister() {
    if (this.isEdit) {
      this.userForm.controls['dateOfBirth'].setValue("");
      this._userService.edituser(this.userForm.value).subscribe(res => {
        this.getListUser();
        this.userForm.reset();
        this.isSucessEdit = true;
        this.getListUser();
      })
    } else {
      console.log("the date is", this.userForm.value.dateOfBirth);

      this.userForm.controls['dateOfBirth'].setValue("");
      this._userService.userRegistration(this.userForm.value).subscribe(res => {
        this.getListUser();
        this.userForm.reset();
        this.isSuccessRegister = true;
      })
    }



  }

  getListUser() {
    this._userService.getAlluser().subscribe(res => {
      this.listuser = res;
      this.showContent = true;
    })
  }
  exitMessage() {
    this.isSucessEdit = false;
    this.isSuccessRegister = false;
  }
  deleteUser(content: any, id: number) {
     // check patient first
    this._userService.getUserById(id).subscribe(res=>{
      this.user=res;
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((ress) => {
        this.closeModal = `Closed with: ${res}`;
      }, (ress) => {
        this.closeModal = `Dismissed ${this.getDismissReason(ress)}`;
      });
    })
 
    
  }

  confirmeDelete(id: number) {
    console.log("the ID to delete is ", id);
    this._userService.deleteuser(id).subscribe(res=>{
      if(res !== null){
        this.modalService.dismissAll();
        this.getListUser();
      }
    });
    
  }
  editUser(id: number) {
    console.log(id);
    // get user by id
    this._userService.getUserById(id).subscribe(res => {
      console.log(res);
      this.user = res;
      this.isEdit = true;
      this.userForm = new FormGroup({
        fName: new FormControl(this.user.fName),
        userId: new FormControl(this.user.userId),
        lName: new FormControl(this.user.lName),
        mName: new FormControl(this.user.mName),
        gender: new FormControl(this.user.gender),
        address: new FormControl(this.user.address),
        dateOfBirth: new FormControl(this.user.dateOfBirth),
        email: new FormControl(this.user.email),
        phoneNumber: new FormControl(this.user.phoneNumber)
      });
      this.listuser = [];
      this.listuser.push(this.user);
    })

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
