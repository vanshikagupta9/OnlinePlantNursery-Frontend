import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminModel } from '../model/adminmodel';
import { AdminService } from '../service/adminservice';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'alladmin',
  template: `<div>
  <br>
<div class="card" style="width: 20rem;">
<img src="./assets/image/admin.jpg" height=200px>

<div class="card-body">

<div class="well hoverwell thumbnail py-3 my-3"[routerLink]="['/admin',admindata.adminId]">
<div style="text-align: center;">
<h1>Admin Details</h1>
<div> Admin : {{ admindata?.adminName }}</div>
<div>Admin Id: {{admindata?.adminId}} </div> 
<div>Password: {{admindata?.password}} </div>

</div>
</div>`,
            })
  
export class AllAdminComponent {

  @Input() admindata : AdminModel[];
  @Output() customEvent = new EventEmitter();
  admin: any;

  constructor(private authService: AuthService, private adminService: AdminService, private activatedRoute: ActivatedRoute,private router : Router) {
  }

  isDisabled = true;
  buttonStyle = "btn btn-primary";

  myFunction() {
    this.isDisabled = false;
    this.buttonStyle = "btn btn-success";
  }

  onButtonClick() {
    this.customEvent.emit(this.admindata);
   //console.log("message is logged***");
  }

  deleteAdmin(adminId){
    console.log("***"+JSON.stringify(adminId));
     this.adminService.deleteAdmin(adminId);
    // this.authService.setAdminId(adminId);
     this.router.navigate(["/home"]);
    // this.router.navigateByUrl("/deleteAdmin"+this.admin.adminId);
}


}


// <div style="text-align: center;">
// <button class= "btn btn-success btn-lg " title="delete admin" (click)= "deleteAdmin()"> Delete </button>
// </div>


