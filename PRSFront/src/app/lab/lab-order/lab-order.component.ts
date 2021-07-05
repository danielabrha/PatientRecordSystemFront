import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { VisitService } from 'src/app/patient/visit.service';
import { LabOrderServiceService } from '../lab-order-service.service';
import { LabTestService } from '../lab-test.service';
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
  listLabTestType: any = [];
  selectedpatientId: number = 0;
  selectedLabTestType: any = [];
  // datatable
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  listLabOrder: any = [];
  constructor(private visitService: VisitService,
    private labTestTypeService: LabTestService,
    private labOrderService: LabOrderServiceService) { }

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
    this.getAllLabTestOrder();
    this.getAllPatient();
    this.getAllLabTestType();
  }
  getAllLabTestOrder() {
    this.labOrderService.getAllLabOrder().subscribe(res => {
      this.listLabOrder = res;
      console.log(res)
    })
  }
  getAllLabTestType() {
    this.labTestTypeService.getAllLabTestType().subscribe(res => {
      this.listLabTestType = res;
      console.log("the lab Test Type list", res);
    })
  }
  getAllPatient() {
    this.visitService.getAllVisit().subscribe(res => {
      this.listPatient = res;
    })
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onPatientSelect() {

  }
  saveLabOrder() {
    for (let selectedLabType of this.selectedLabTestType) {
      // console.log(selectedLabType)
      // console.log("and its ",this.selectedpatientId)
      this.labOrderService.LabOrderRegistration(this.selectedpatientId, selectedLabType
      ).subscribe(res => {
        console.log(res);
        this.getAllLabTestOrder();
        this.selectedpatientId = 0;
        this.selectedLabTestType = [];
      })
    }
  }
}
