import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  dropdownSettings:IDropdownSettings={};
  dropdownList:{item_id:Number,item_text:string}[] = [];
  selectedItems = [];
  userroleForm = new FormGroup({
    roleName: new FormControl(''),
    userName: new FormControl(''),
    roleId: new FormControl(''),
    userId: new FormControl(''),

  });
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  userroles=[{
    "userName":"@aman.com",
    "roleName":"Admin"
  },{
    "userName":"@ha.com",
    "roleName":"Doctor"
  },{
    "userName":"@ba.com",
    "roleName":"Laboratorist"
  },{
    "userName":"@ha.com",
    "roleName":"Patient"
  },{
    "userName":"@aman.com",
    "roleName":"Admin"
  },{
    "userName":"@aman.com",
    "roleName":"Admin"
  }]
  constructor() { }
  ngOnInit() {
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
  
    this.dropdownSettings= {
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
}
