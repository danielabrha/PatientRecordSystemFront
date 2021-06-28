import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listuser: any = [];
  isEdit = false;
  isSucessEdit = false;
  isDelete = false;
  userForm = new FormGroup({
    id: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
  });

}
