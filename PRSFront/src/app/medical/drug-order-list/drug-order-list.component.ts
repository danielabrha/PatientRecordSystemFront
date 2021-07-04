import { Component, OnInit } from '@angular/core';
import { DrugOrderOrderService } from '../drug-order.service'
@Component({
  selector: 'app-drug-order-list',
  templateUrl: './drug-order-list.component.html',
  styleUrls: ['./drug-order-list.component.css']
})
export class DrugOrderListComponent implements OnInit {
  // datatable
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  listDrugOrder: any = [];
  constructor(private druOrderSerice: DrugOrderOrderService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.getAllDrugOrder();
  }
  getAllDrugOrder() {
    this.druOrderSerice.getAllDrugOrder().subscribe(res => {
      console.log("drug order list",res);
      this.listDrugOrder = res;
    })
  }
}
