import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LabTestService } from '../lab-test.service';
@Component({
  selector: 'app-lab-test',
  templateUrl: './lab-test.component.html',
  styleUrls: ['./lab-test.component.css']
})
export class LabTestComponent implements OnInit {
  labTestForm = new FormGroup({
    labTestName: new FormControl(''),
    labTestId: new FormControl(0),
    labTestCode: new FormControl('')
  });
  // variable declaration
  listLabTest:any=[];
  isEdit:boolean=false;
  isSucessEdit:boolean=false;
  isSuccessRegister:boolean=false;
  labTestType: any="";
  closeModal: any;
  tempId:any=0;
  constructor(private modalService: NgbModal,private _labTestTypeService:LabTestService) { }
 // datatable propertis
 title = 'datatables';
 dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.getAllLabTestType();
  }
  registerLabTestType() {
    if(this.isEdit){
      this._labTestTypeService.editLabTestType(this.tempId, this.labTestForm.value).subscribe(res=>{
        this.getAllLabTestType();
        this.isSucessEdit=true;
        this.isEdit=false;
        this.labTestForm.reset();
      })
    }else{
      this._labTestTypeService.LabTestTypeRegistration(this.labTestForm.value)
      .subscribe(res=>{
        this.getAllLabTestType();
        this.isSuccessRegister=true;
        this.labTestForm.reset();
      })
    }
  }
 
  editLabTestType(id:any){
    this.tempId=id;
    this.isEdit=true;
      this._labTestTypeService.getLabTestTypeById(id).subscribe(res => {
        this.labTestType = res;
        this.labTestForm = new FormGroup({
          labTestTypeName: new FormControl(this.labTestType.labTestTypeName),
          labTestTypeCode: new FormControl(this.labTestType.labTestTypeCode),
          labTestTypeId: new FormControl(this.labTestType.labTestTypeId),
          
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
    deleteLabTestType(content: any, id: any){
   
      this._labTestTypeService.getLabTestTypeById(id).subscribe(res => {
        this.labTestType = res;
      })
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: "patientModal" }).result.then((res) => {
        this.closeModal = `Closed with: ${res}`;
      }, (res) => {
        this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
      });
    }
    confirmeDelete(id:any){
      this._labTestTypeService.deleteLabTestType(id).subscribe(res => {
        this.getAllLabTestType();
        this.modalService.dismissAll();
  
      })
    }
    getAllLabTestType(){
      this._labTestTypeService.getAllLabTestType().subscribe(res=>{
        this.labTestType=res;
        console.log("list Lab Test Type",res);
      })
    }
    exitMessage(){
      this.isSucessEdit = false;
      this.isSuccessRegister = false;
    }
}
