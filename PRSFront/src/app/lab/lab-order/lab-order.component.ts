import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-lab-order',
  templateUrl: './lab-order.component.html',
  styleUrls: ['./lab-order.component.css']
})
export class LabOrderComponent implements OnInit {
  // for multi select
  dropdownSettings: IDropdownSettings = {};
  dropdownList: { item_id: Number, item_text: string }[] = [];
  selectedItems = [];
  // variables
  listPatient: any = [];
  selectedpatientId: number = 0;
  // datatable
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  listLabOrder:any=[];
  constructor() { }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onPatientSelect() {}
  saveLabOrder(){

  }
}
