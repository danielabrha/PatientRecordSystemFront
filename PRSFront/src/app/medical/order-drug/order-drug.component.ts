import { Component, OnInit } from '@angular/core';
import { VisitService } from 'src/app/patient/visit.service';
import { DrugOrderOrderService } from '../drug-order.service';
import { DrugService } from '../drug.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-drug',
  templateUrl: './order-drug.component.html',
  styleUrls: ['./order-drug.component.css']
})
export class OrderDrugComponent implements OnInit {

  // variables
  listPatient: any = [];
  listDrug: any = [];
  selectedpatientId: number = 0;
  selectedDrug: any = [];
  eableDrugTable: any = false;
  amount:any=0;
  // datatable
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  listDrugOrder: any = [];
  constructor(private visitService: VisitService,
    private drugServiceService: DrugService,
    private drugOrderSerice: DrugOrderOrderService,private router:Router) { }

  ngOnInit(): void {
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.getAllLabDrugOrder();
    this.getAllPatient();
    this.getAllDrug();
  }
  getAllLabDrugOrder() {
    this.drugOrderSerice.getAllDrugOrder().subscribe(res => {
      this.listDrugOrder = res;
      console.log(res)
    })
  }
  getAllDrug() {
    this.drugServiceService.getAllDrug().subscribe(res => {
      this.listDrug = res;
      console.log("the lab Test Type list", res);
    })
  }
  getAllPatient() {
    this.visitService.getAllVisit().subscribe(res => {
      this.listPatient = res;
    })
  }

  onPatientSelect() {

  }
 async saveDrugOrder() {

    for (let selectedDrugId of this.selectedDrug) {
      this.eableDrugTable = true;
      this.drugOrderSerice.DrugOrderRegistration(this.amount,this.selectedpatientId, selectedDrugId
      ).subscribe(res => {
        console.log(res);
      })
    }
    this.router.navigateByUrl('drug/order/list');
  }
}