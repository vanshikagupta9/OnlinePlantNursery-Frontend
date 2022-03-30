import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AdminModel } from "../model/adminmodel";
import { AdminService } from "../service/adminservice";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
    constructor(private adminservice: AdminService,private router:Router) { }
    user : AdminModel;
    submitted:boolean=false;
    haveData: number;
    data: any;
    resError:any;
    signInUser(signindata:AdminModel){
      // this.haveData = 0; 
      //this.submitted=true;
      
      this.adminservice.signInUser(signindata).subscribe((user) => {this.user=user},(resError)=> {this.resError=resError})
      if(this.user!=null){
          
          localStorage.setItem('isUser','user');
          alert("Logged In Successfully");
          this.router.navigate(['/home']);
      }
    }
}
