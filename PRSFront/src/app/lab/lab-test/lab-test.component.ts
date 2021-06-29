import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-lab-test',
  templateUrl: './lab-test.component.html',
  styleUrls: ['./lab-test.component.css']
})
export class LabTestComponent implements OnInit {
  labTestForm = new FormGroup({
    labTestName: new FormControl(''),
    id: new FormControl(0),
    labTestCode: new FormControl('')
  });
  // variable declaration
  listLabTest:any=[];
  constructor() { }
 // datatable propertis
 title = 'datatables';
 dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  registerLabTest(){

  }
}
