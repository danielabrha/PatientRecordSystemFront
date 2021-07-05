import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // variable declaration here
  userName:any="";
  password:any="";
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {

  }
login(){
  this.loginService.login({}).subscribe(res=>{
    console.log(res);
  })
}
// login(){
//   this.loginService.login("").su
// }
}
