import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { EventEmitter } from 'events';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';



@Component({
  selector: 'update-customer',
  template: `<div class="col-md-6">
  <div class="container">
   <br>
              <div style="card-align: center;">
            <div class="card" style="width: 40rem;">
            <div class="card-body">
  <form #newCustomerForm="ngForm" autocomplete="off" novalidate (ngSubmit)="updateCustomer(newCustomerForm.value)">
  <div class="form-group" >
    <label for="name">customerId:</label>
    <em *ngIf="newCustomerForm.controls.customerId?.invalid && (newCustomerForm.controls.customerId?.touched)"> customerId Required</em>
        <input  id="customerId" type="number"  class="form-control" required name="customerId" readonly [ngModel]=customer?.customerId />
  </div>
  
  <div class="form-group" >
    <label for="name">Customer Name:</label>
    <em *ngIf="newCustomerForm.controls.customerName?.invalid && (newCustomerForm.controls.customerName?.touched)" style="color:red"> Name Required</em>
    <em *ngIf="newCustomerForm.controls.customerName?.errors?.pattern">Special Characters are not allowed</em>
  <em *ngIf="newCustomerForm.controls.customerName?.errors?.minlength">Enter customerName</em> 
        <input  id="customerName" type="text"  class="form-control"  required minlength="3" required maxlength="15" [pattern]="'^[a-zA-Z]+$'" name="customerName"  [ngModel]=customer?.customerName placeholder="Name of your Customer..." />
  </div>
  <div class="form-group">
  <em *ngIf="newCustomerForm.controls.customerEmail?.invalid && (newCustomerForm.controls.customerEmail?.touched)" style="color:red">Required valid pattern</em>
        <label for="customerEmail">customer Email </label>
        <input type="email" class="form-control" id="customerEmail"
               [ngModel]=customer?.customerEmail required name="customerEmail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
      </div>
      <div class="form-group">
        <label for="roomno">Room No</label>
        <em *ngIf="newCustomerForm.controls.roomno?.invalid && (newCustomerForm.controls.roomno?.touched)" style="color:red">Required</em>
        <em *ngIf="newCustomerForm.controls.roomno?.errors?.pattern">Enter valid value</em>
  <em *ngIf="newCustomerForm.controls.roomno?.errors?.minlength">Enter roomno</em> 
        <input type="number" class="form-control" id="roomno"
               [ngModel]=customer?.roomno  required name="roomno" required min = 1 [pattern]="'^[1-999999]+$'" placeholder="Enter your house number eg: 115,123...">
               <div *ngIf="roomno <= 0" style="color:red">Enter valid value for room no</div>
               </div>
      <div class="form-group">
        <label for="district">District </label>
        <em *ngIf="newCustomerForm.controls.district?.invalid && (newCustomerForm.controls.district?.touched)" style="color:red">Required</em>
        <em *ngIf="newCustomerForm.controls.district?.errors?.pattern">Special Characters are not allowed</em>
  <em *ngIf="newCustomerForm.controls.district?.errors?.minlength">Enter district</em> 
        <input type="text" class="form-control"  required minlength="4" required maxlength="15" [pattern]="'^[a-zA-Z]+$'" id="district"
               [ngModel]=customer?.district name="district">
      </div>
      <div class="form-group">
        <label for="state">State </label>
        <em *ngIf="newCustomerForm.controls.state?.invalid && (newCustomerForm.controls.state?.touched)" style="color:red">Required</em>
        <em *ngIf="newCustomerForm.controls.state?.errors?.pattern">Special Characters are not allowed</em>
  <em *ngIf="newCustomerForm.controls.state?.errors?.minlength">Enter state</em> 
        <input type="text" class="form-control"  required minlength="3" required maxlength="15" [pattern]="'^[a-zA-Z]+$'" id="state"
               [ngModel]=customer?.state name="state">
      </div>
      <div class="form-group">
                  <label>Verify</label>
                  <div class="form-control">
                    
                    <label class="radio-inline">
                      <input type="radio" name="Verify" value="Verify" ngModel>
                      Is the above entered data correct?
                    </label>
                  </div>
                </div>
      <div style="text-align: center;">
      <br>
  <button type="submit "  [disabled]=newCustomerForm.invalid class="btn btn-success btn-lg">UPDATE</button>
  <button type="button "  style="margin-left:3%" class="btn btn-success btn-lg" (click)="cancel()">CANCEL</button>
  
  </div>
    `,
    styles: [`
    em{float:right; color: #E05c65; padding-left-10px;}
     .container{
           
           width: 50%;
         margin-left : 50%
     }`]
})
export class UpdateCustomerComponent implements OnInit {
  cid: number
  private customer: Customer ;
    // Capture the course id from URL  ActivatedRoute, ActivatedRouterSnapshot
    constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute,private router : Router) {
      
      console.log("customer List component clicked****");}
      ngOnInit(): void {
         this.customerService.getCustomerById(+this.activatedRoute.snapshot.params['customerId']).subscribe(customer => this.customer = customer);
       }
      
         updateCustomer(customer:Customer){
           console.log("***" + JSON.stringify(customer))
           this.customerService.updateCustomer(customer).subscribe(customer => this.customer = customer)
           alert("Data Updated Successfully!!!");
           this.router.navigate(['/customers']);
         }  
         cancel(){
          this.router.navigate(['/customers'])
        }
  
 

}