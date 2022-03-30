import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventEmitter } from 'events';
import { AdminModel } from '../model/adminmodel';
import { Customer } from '../model/customer.model';
import { AdminService } from '../service/adminservice';
import { CustomerService } from '../service/customer.service';



@Component({
  selector: 'delete-admin',
  template: ``,
})
export class DeleteAdminComponent  {
  
 
    private admin: AdminModel;
    // Capture the course id from URL  ActivatedRoute, ActivatedRouterSnapshot
    constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute,private router : Router) {
    
      

         this.adminService.deleteAdmin(+activatedRoute.snapshot.params['admin']).subscribe(data => console.log(data)); 
         console.log("admin is deleted  **********");// Capture id from URL and passit to service
         this.router.navigate(['/admin']);
    
  
 

}}