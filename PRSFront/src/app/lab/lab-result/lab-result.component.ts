import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-result',
  templateUrl: './lab-result.component.html',
  styleUrls: ['./lab-result.component.css']
})
export class LabResultComponent implements OnInit {
  listPatient:any=[];
  listOrder:any=[];
  isSelect:boolean=false;
  selectedpatientId:Number=0;
  constructor() { }

  ngOnInit(): void {
  }
  onPatientSelect(){
    this.isSelect=true;
  }
  submitData(){

  }
}
