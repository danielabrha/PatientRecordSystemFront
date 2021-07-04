import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { VisitService } from '../visit.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {
  listPatient: any = [];
  listVisit: any = [];
  selectedpatientId: any;
  isSuccessRegister: boolean = false;
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  constructor(private _patientService: PatientService, private _visitService: VisitService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.getAllPatient();
    this.getAllVisit();
  }
  getAllVisit() {
    this._visitService.getAllVisit().subscribe(res => {
      this.listVisit = res;
      console.log(res);
    })
  }
  getAllPatient() {
    this._patientService.getAllPatient().subscribe(res => {
      this.listPatient = res;
    })
  }
  visitIt() {
    console.log(this.selectedpatientId);
    this._visitService.VisitRegistration(this.selectedpatientId).subscribe(res=>{
     this.getAllVisit();
    })
  }
  exitMessage() {
    this.isSuccessRegister = false;
  }

}
