import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminModel } from '../model/adminmodel';
import { AdminService } from '../service/adminservice';

@Component({
    selector: 'addadmin',
    template: `<div class="col-md-6">
    <div class="container">
     <br>
                <div style="card-align: center;">
              <div class="card" style="width: 40rem;">
              <div class="card-body">
    <form #newAdminForm="ngForm" autocomplete="off" novalidate (ngSubmit)="addAdmin(newAdminForm.value)">
    <div class="form-group" >
     <label for="adminId">Admin Id</label>
      <em *ngIf="newAdminForm.controls.adminId?.invalid && (newAdminForm.controls.adminId?.touched)" style="color:red"> adminId Required</em>
      
          <input  id="adminId" type="text" required class="form-control" name="adminId" min = 1 [(ngModel)]=adminId placeholder="Number of your adminId eg: 123" />
          <div *ngIf="adminId <= 0" style="color:red">Enter positive integer value</div>
          </div>
    
    <div class="form-group" >
    
     <label for="adminName">Admin Name</label>
      <em *ngIf="newAdminForm.controls.adminName?.invalid && (newAdminForm.controls.adminName?.touched)" style="color:red"> Name Required</em>
         <input  id="adminName" type="text" required class="form-control" name="adminName" [(ngModel)]=adminName placeholder="Enter adminName eg: Abcxyz" />
  </div>
    <div class="form-group">
    <label for="password">Password</label>
    <em *ngIf="newAdminForm.controls.password?.invalid && (newAdminForm.controls.password?.touched)" style="color:red">invalid pattern</em>      
           <input type="password"  class="form-control" placeholder="Enter password eg: Abcd@12"name="password" [(ngModel)]=password required >
                  
  </div>
       <br>
       <br>
        <div style="text-align: center;">
       <button type="submit"  [disabled]=newAdminForm.invalid class="btn btn-success btn-lg">Save</button>
       <button style="margin-left: 1%" type="button"   class="btn btn-success btn-lg" (click)="cancel()">Cancel</button>
    
    </div>
      `,
    styles: [`
      em{float:right; color: #E05c65; padding-left-10px;}
       .container{
             
             width: 50%;
           margin-left : 50%
       }`]
})


export class AddAdminComponent {
    admin: AdminModel;

    constructor(private router: Router, private adminService: AdminService) {

    }

    addAdmin(newAdmin) {
        if (newAdmin.adminId > 0) {

            if (newAdmin.adminName.includes("0")) {
                alert("Admin Name Should be Between A-Z")
                this.router.navigate(['/admin/addadmin'])
            }
            else if (newAdmin.adminName.includes("1")) {
                alert("Admin Name Should be Between A-Z")
                this.router.navigate(['/admin/addadmin'])
            }
            else if (newAdmin.adminName.includes("2")) {
                alert("Admin Name Should be Between A-Z")
                this.router.navigate(['/admin/addadmin'])
            }
            else if (newAdmin.adminName.includes("3")) {
                alert("Admin Name Should be Between A-Z")
                this.router.navigate(['/admin/addadmin'])
            }
            else if (newAdmin.adminName.includes("4")) {
                alert("Admin Name Should be Between A-Z")
                this.router.navigate(['/admin/addadmin'])
            }
            else if (newAdmin.adminName.includes("5")) {
                alert("Admin Name Should be Between A-Z")
                this.router.navigate(['/admin/addadmin'])
            }
            else if (newAdmin.adminName.includes("6")) {
                alert("Admin Name Should Be between A-Z")
                this.router.navigate(['/admin/addadmin'])
            }
            else if (newAdmin.adminName.includes("7")) {
                alert("Admin Name Should be Between A-Z")
                this.router.navigate(['/admin/addadmin'])
            }
            else if (newAdmin.adminName.includes("8")) {
                alert("Admin Name Should be Between A-Z")
                this.router.navigate(['/admin/addadmin'])
            }
            else if (newAdmin.adminName.includes("9")) {
                alert("Admin Name Should be Between A-Z")
                this.router.navigate(['/admin/addadmin'])
            }
            else {
                if (newAdmin.password.includes("@")) {

                    this.adminService.addAdmin(newAdmin).subscribe(admin => this.admin = admin)
                    alert("Admin Added Successfully!");
                    this.router.navigate(['/admin'])
                    console.log(newAdmin)
                }
               else if (newAdmin.password.includes("#")) {

                    this.adminService.addAdmin(newAdmin).subscribe(admin => this.admin = admin)
                    alert("Admin Added Successfully!");
                    this.router.navigate(['/admin'])
                    console.log(newAdmin)
                }
               else if (newAdmin.password.includes("$")) {

                    this.adminService.addAdmin(newAdmin).subscribe(admin => this.admin = admin)
                    alert("Admin Added Successfully!");
                    this.router.navigate(['/admin'])
                    console.log(newAdmin)
                }
               else if (newAdmin.password.includes("&")) {

                    this.adminService.addAdmin(newAdmin).subscribe(admin => this.admin = admin)
                    alert("Admin Added Successfully!");
                    this.router.navigate(['/admin'])
                    console.log(newAdmin)
                }
                else {
                    alert("Invalid Password Pattern")
                    this.router.navigate(['/admin/addadmin'])
                }
            }
        }
        else {
            alert("Admin Id Cannot Be Negative or Zero")
            this.router.navigate(['/admin/addadmin'])
        }

    }

    
    cancel() {
        //alert("Data Saved Successfully!")
        this.router.navigate(['/admin'])
    }
}