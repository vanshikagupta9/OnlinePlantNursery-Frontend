import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventEmitter } from 'events';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';



@Component({
  selector: 'delete-customer',
  template: ``,
})
export class DeleteCustomerComponent  {
  
 
    private customer: Customer;
    // Capture the course id from URL  ActivatedRoute, ActivatedRouterSnapshot
    constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute,private router : Router) {
    
      
      if(confirm("Are you sure you want to delete this data?")){
         this.customerService.deleteCustomerById(+activatedRoute.snapshot.params['cid']).subscribe(data => console.log(data))
         alert("Deleted Successfully!!");
         console.log("customer is deleted  **********");// Capture id from URL and passit to service
         this.router.navigate(['/customers']);
      }
  
 

}
}