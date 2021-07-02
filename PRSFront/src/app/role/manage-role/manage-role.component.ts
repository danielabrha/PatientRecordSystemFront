import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-manage-role',
  templateUrl: './manage-role.component.html',
  styleUrls: ['./manage-role.component.css']
})
export class ManageRoleComponent implements OnInit {
   // modal variables
   closeModal: any;
   isSuccessRegister:boolean=false;
  listRole: any = [];
  isEdit = false;
  isSucessEdit = false;
  isDelete = false;
  roleForm:any;
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  role: any="";
  constructor(private _roleService:RoleService, private modalService: NgbModal) { 
    this.roleForm = new FormGroup({
      roleName: new FormControl(''),
      roleId: new FormControl(0),
      
    });
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  this.getAllRole();
  }
  roleRegister() {
    if(this.isEdit){
      this._roleService.editRole(this.roleForm.value).subscribe(res=>{
        this.getAllRole();
        this.isSucessEdit=true;
        this.isEdit=false;
        this.roleForm.reset();
      })
    }else{
      this._roleService.RoleRegistration(this.roleForm.value).subscribe(res=>{
        this.getAllRole();
        this.isSuccessRegister=true;
        this.roleForm.reset();
      })
    }
 
  }
  exitMessage(){
    this.isSucessEdit = false;
    this.isSuccessRegister = false;
  }
  editRole(id:any){
  this.isEdit=true;
    this._roleService.getRoleById(id).subscribe(res => {
      this.role = res;
      this.roleForm = new FormGroup({
        roleName: new FormControl(this.role.roleName),
        roleId: new FormControl(this.role.roleId),
        
      });
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
  deleteRole(content: any, id: any){
   
    this._roleService.getRoleById(id).subscribe(res => {
      this.role = res;
    })
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: "patientModal" }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  confirmeDelete(id:any){
    this._roleService.deleteRole(id).subscribe(res => {
      this.getAllRole();
      this.modalService.dismissAll();

    })
  }
  getAllRole(){
    this._roleService.getAllRole().subscribe(res=>{
      this.listRole=res;
    })
  }
  }

