import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {
  // datatable propertis
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  //variable
  listDrug: any = [];
  drugForm = new FormGroup({
    drugName: new FormControl(''),
    drugCode: new FormControl(0),
    id: new FormControl(0)
  });
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  registerDrug() {

  }
}
