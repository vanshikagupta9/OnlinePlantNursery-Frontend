import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventEmitter } from 'events';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';



@Component({
  selector: 'course',
  template:  ` <div class="row">
  <div class="col-md-5">
  <div class="container">
  <br>
  <div style="card-align: center;">
<div class="card" style="width: 20rem;">
<img src="https://thumbs.dreamstime.com/b/woman-shopping-zucchini-seedling-plant-nursery-woman-shopping-zucchini-seedling-plant-nursery-customer-choosing-buying-218622515.jpg">

<div class="card-body">
<div style="text-align: center;">
  <div class="well hoverwell thumbnail py-3 my-3">
  <h2> Id   : {{customer?.customerId}}  </h2>
  <div> Name : {{customer?.customerName}} </div>
  <div>Email   : {{customer?.customerEmail}} </div>
  <div>roomno   : {{customer?.roomno}} </div>
  <div>district   : {{customer?.district}} </div>
  <div>state   : {{customer?.state}} </div>
  <div class="col-md-12">

  <div style="text-align: center;">
    <button class="btn btn-success btn-lg" title="delete customer" (click)="deletefunction()">Delete</button>
  
    <button class="btn btn-success btn-lg" style="margin-left:3%" title="update customer" (click)="onButtonClick()">Update</button>
  </div>
  </div>
</div>
`,
styles: [`
.row{
     
      padding: 25px;
      width: 50%;
      height:20%;
        margin-left : 30%
}
`]

})
export class CustomerByIdComponent implements OnInit{
  private customer: Customer;
  private delete: any
  errorMsg: String;

  // Capture the course id from URL  ActivatedRoute, ActivatedRouterSnapshot
  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute,private router : Router) {
  }
  ngOnInit(): void{
    console.log("Course List component clicked**********");

     //  this.customerService.getCustomerById(+this.activatedRoute.snapshot.params['cid']).subscribe(c => this.customer = c); // Capture id from URL and passit to service
     this.customerService.getCustomerById(+this.activatedRoute.snapshot.params['cid']).subscribe(c => this.customer = c),
     catchError(error => {
      this.errorMsg = error.message;
      return of([]);
  }); // Capture id from URL and passit to service


  }
  
       onButtonClick(){
        this.router.navigate(['/customers/customers/update/'+this.customer.customerId]);

         
        //  this.customEvent.emit(this.customerdata);  // what ever is send  by default get stored into one javascript '$event'
       } 
       deletefunction()
       {
          this.router.navigate(['/customers/customers/deletecustomer/'+this.customer.customerId]);
       }   
  
 }

