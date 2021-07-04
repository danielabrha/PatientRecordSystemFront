import { Component, OnInit } from '@angular/core';
import { VisitService } from 'src/app/patient/visit.service';
import { LabOrderServiceService } from '../lab-order-service.service';
import { LabResultService } from '../lab-result.service';

@Component({
  selector: 'app-lab-result',
  templateUrl: './lab-result.component.html',
  styleUrls: ['./lab-result.component.css']
})
export class LabResultComponent implements OnInit {
  listPatientVisit: any = [];
  listOfSelectedOrder: any = [];
  listOrder: any = [];
  isSelect: boolean = false;
  selectedpatientId: Number = 0;
  constructor(private visitService: VisitService,
     private labOrderService: LabOrderServiceService,
     private labResultService:LabResultService) { }

  ngOnInit(): void {
    this.getAllPatient();
  }
  getAllPatient() {
    this.visitService.getAllVisit().subscribe(res => {
      this.listPatientVisit = res;
    })
  }
  onPatientSelect() {
    this.isSelect = true;
    this.listOfSelectedOrder = [];
    console.log(this.selectedpatientId);
    this.labOrderService.getAllLabOrder().subscribe(res => {
      this.listOrder = res;
      for (let labOrder of this.listOrder) {
        if (labOrder.visit.visitId == this.selectedpatientId) {
          this.listOfSelectedOrder.push(labOrder);
        }
      }
    })
  }
  submitData() {
    for (let labresult of this.listOfSelectedOrder) {
           // get the order id
           let orderId=labresult.labOrderId;
           // access the data inside of  that id
           let result= (<HTMLInputElement>document.getElementById(orderId)).value;
           this.labResultService.LabResultRegistration(result,orderId).subscribe(res=>{
             console.log(res);
           })
    }
  }
}
