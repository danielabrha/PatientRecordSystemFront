import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manage-role',
  templateUrl: './manage-role.component.html',
  styleUrls: ['./manage-role.component.css']
})
export class ManageRoleComponent implements OnInit {
  listRole: any = [];
  isEdit = false;
  isSucessEdit = false;
  isDelete = false;
  roleForm:any;
  constructor() { 
    this.roleForm = new FormGroup({
      roleName: new FormControl(''),
      id: new FormControl(''),
      
    });
  }

  ngOnInit(): void {
  }
  roleRegister() {}
  exitMessage(){}
}
