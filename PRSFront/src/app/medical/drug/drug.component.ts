import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DrugService } from '../drug.service';

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
  isEdit:boolean=false;
  isSucessEdit:boolean=false;
  isSuccessRegister:boolean=false;
  listDrug: any = [];
  drug:any="";
  closeModal: any;
  drugForm = new FormGroup({
    drugName: new FormControl(''),
    drugCode: new FormControl(0),
    id: new FormControl(0)
  });
  constructor(private _drugService:DrugService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.getAllDrug();
  }
  registerDrug() {
    if(this.isEdit){
      this._drugService.editDrug(this.drugForm.value).subscribe(res=>{
        this.getAllDrug();
        this.isSucessEdit=true;
        this.isEdit=false;
        this.drugForm.reset();
      })
    }else{
      this._drugService.DrugRegistration(this.drugForm.value).subscribe(res=>{
        this.getAllDrug();
        this.isSuccessRegister=true;
        this.drugForm.reset();
      })
    }
  }
 
  editDrug(id:any){
    this.isEdit=true;
      this._drugService.getDrugById(id).subscribe(res => {
        this.drug = res;
        this.drugForm = new FormGroup({
          drugName: new FormControl(this.drug.drugName),
          drugCode: new FormControl(this.drug.drugCode),
          drugId: new FormControl(this.drug.drugId),
          
        });
      })
    
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }

    }
    deleteDrug(content: any, id: any){
   
      this._drugService.getDrugById(id).subscribe(res => {
        this.drug = res;
      })
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: "patientModal" }).result.then((res) => {
        this.closeModal = `Closed with: ${res}`;
      }, (res) => {
        this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
      });
    }
    confirmeDelete(id:any){
      this._drugService.deleteDrug(id).subscribe(res => {
        this.getAllDrug();
        this.modalService.dismissAll();
  
      })
    }
    getAllDrug(){
      this._drugService.getAllDrug().subscribe(res=>{
        this.listDrug=res;
      })
    }
    exitMessage(){
      this.isSucessEdit = false;
      this.isSuccessRegister = false;
    }
}
