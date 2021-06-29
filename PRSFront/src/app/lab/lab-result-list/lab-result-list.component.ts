import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-result-list',
  templateUrl: './lab-result-list.component.html',
  styleUrls: ['./lab-result-list.component.css']
})
export class LabResultListComponent implements OnInit {
 // datatable
 title = 'datatables';
 dtOptions: DataTables.Settings = {};
 listLabResult:any=[];
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

}
