import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserService } from 'src/app/user/user.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  // variables
  selectedUserId: any = 0;
  selectedRoleId: any = 0;

  userrolelist: any = [];
  listRole: any = [];
  listUser: any = [];

  isSucessEdit: boolean = false;
  isSuccessRegister: boolean = false;
  dropdownSettings: IDropdownSettings = {};
  dropdownList: { item_id: Number, item_text: string }[] = [];
  selectedItems = [];
  userroleForm = new FormGroup({
    roleName: new FormControl(''),
    userName: new FormControl(''),
    roleId: new FormControl(0),
    userId: new FormControl(0),

  });
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  userroles = [{
    "userName": "@aman.com",
    "roleName": "Admin"
  }, {
    "userName": "@ha.com",
    "roleName": "Doctor"
  }, {
    "userName": "@ba.com",
    "roleName": "Laboratorist"
  }, {
    "userName": "@ha.com",
    "roleName": "Patient"
  }, {
    "userName": "@aman.com",
    "roleName": "Admin"
  }, {
    "userName": "@aman.com",
    "roleName": "Admin"
  }]
  constructor(private userService: UserService,
    private roleService: RoleService) { }
  ngOnInit() {
    this.getAllRole();
    this.getAllUser();
    this.getUserRole();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.dropdownList = [
      { 'item_id': 1, 'item_text': 'Mumbai' },
      { 'item_id': 2, 'item_text': 'Bangaluru' },
      { 'item_id': 3, 'item_text': 'Pune' },
      { 'item_id': 4, 'item_text': 'Navsari' },
      { 'item_id': 5, 'item_text': 'New Delhi' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  // UserroleRegister() { }
  exitMessage() {
    this.isSuccessRegister = false;
    this.isSucessEdit = false;
  }
  saveUserRole() {
    this.userService.saveUserRole(this.selectedRoleId, this.selectedUserId).subscribe(res => {
      this.isSuccessRegister = true;
      this.getAllUser();
    })
  }
  async getAllUser() {
    await this.userService.getAlluser().subscribe(res => {
      this.listUser = res;

      // console.log("list of role is", res);
    }
    );
  }
  getUserRole() {
    console.log("Inside of the user role get")
    console.log(this.listUser);
    for (let user of this.listUser) {
      console.log("user role ", user.roleList);
      if (user.roleList != null) {
        this.userrolelist.push(user);
        console.log(this.userrolelist);
      }
    }
  }
  async getAllRole() {
    await this.roleService.getAllRole().subscribe(res => {
      this.listRole = res;
    })
  }

}
