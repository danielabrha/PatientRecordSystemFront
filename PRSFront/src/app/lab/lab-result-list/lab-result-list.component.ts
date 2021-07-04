import { Component, OnInit } from '@angular/core';
import { LabResultService } from '../lab-result.service';

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
  constructor(private labResultService:LabResultService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.getAllLabResult();
  }
getAllLabResult(){
  this.labResultService.getAllLabResult().subscribe(res=>{
    this.listLabResult=res;
    console.log("the result is",res);
  })
}
}
