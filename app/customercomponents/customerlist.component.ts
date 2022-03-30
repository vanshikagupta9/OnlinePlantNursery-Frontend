
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';



@Component({
  selector: 'customer-list',
  template: `<div >
  <style>
                h1 {text-align: center; color: whitesmoke;}
              </style>
                    <h1>LIST OF CUSTOMERS</h1>
                    
                    <div  class= "row row-cols-2">
                    <div  *ngFor="let customer of customers" class="col-md-4 ">  
                            <all-customer  [customerdata] = customer (customEvent)="parentFunction($event)" ></all-customer>    
                            
                     </div>
              </div>
            `,
})


export class CustomerListComponent implements OnInit{
  // @Input() customerdata: Customer[] ;  
  // @Output() customEvent =  new EventEmitter(); 

  private customers : Customer[];
  errorMsg: any;
  constructor(private customerService: CustomerService) {
    
    console.log("Customers List component clicked****");
    //let obs : Observable<Customer []>
    //  this.customerService.getAllCustomers().subscribe(customers => this.customers = customers);

  // constructor(private customerService: CustomerService) {
  //   console.log("Course List component clicked**********");
  //   this.customers = this.customerService.getAllCustomers();
  }
  ngOnInit():void{
    console.log("NG on init from all courses");
   // this.customerService.getAllCustomers().subscribe(customers => this.customers = customers);
   this.customerService.getAllCustomers().subscribe(customers => this.customers = customers,
    catchError(error => {
     this.errorMsg = error.message;
     return of([]);
 }));

  }

  parentFunction(event) {
    console.log(event);
  }
}
