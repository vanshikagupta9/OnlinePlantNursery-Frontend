import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'create-customer',
  template: `<div class="col-md-6">
  <div class="container">
   <br>
              <div style="card-align: center;">
            <div class="card" style="width: 40rem;">
            <div class="card-body">
  <form #newCustomerForm="ngForm" autocomplete="off" novalidate (ngSubmit)="addCustomer(newCustomerForm.value)">
 
  
  <div class="form-group" >
  
    <label for="name">Customer Name:</label>
    <em *ngIf="newCustomerForm.controls.customerName?.invalid && (newCustomerForm.controls.customerName?.touched)" style="color:red"> Name Required</em>
    <em *ngIf="newCustomerForm.controls.customerName?.errors?.pattern">Special Characters are not allowed</em>
  <em *ngIf="newCustomerForm.controls.customerName?.errors?.minlength">Enter customerName</em> 
        <input  id="customerName" type="text"  class="form-control"  required minlength="4" required maxlength="15" [pattern]="'^[a-zA-Z]+$'" name="customerName"  [(ngModel)]=customerName placeholder="Name of your Customer eg: Abc..."  />
  </div>
  <div class="form-group">
  <em *ngIf="newCustomerForm.controls.customerEmail?.invalid && (newCustomerForm.controls.customerEmail?.touched)" style="color:red">invalid pattern</em>
        <label for="customerEmail">customer Email </label>
        <input type="email" class="form-control" id="customerEmail"
               [(ngModel)]="customerEmail" name="customerEmail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"placeholder="Your Email eg: Abc@gmail.com..." >
               


      </div>
      <div class="form-group">
        <label for="roomno">Room No</label>
        <em *ngIf="newCustomerForm.controls.roomno?.invalid && (newCustomerForm.controls.roomno?.touched)" style="color:red">Required</em>
        <em *ngIf="newCustomerForm.controls.roomno?.errors?.pattern">Special Characters are not allowed</em>
  <em *ngIf="newCustomerForm.controls.roomno?.errors?.minlength">Enter roomno</em> 
        <input type="number" class="form-control" id="roomno"
               [(ngModel)]="roomno" name="roomno" placeholder="Enter your house number eg: 115,123...">
               <div *ngIf="roomno <= 0" style="color:red">Enter valid value for room no</div>
      </div>
      <div class="form-group">
        <label for="district">District </label>
      <em *ngIf="newCustomerForm.controls.district?.invalid && (newCustomerForm.controls.district?.touched)" style="color:red">Required</em>
      <em *ngIf="newCustomerForm.controls.district?.errors?.pattern">Special Characters are not allowed</em>
  <em *ngIf="newCustomerForm.controls.district?.errors?.minlength">Enter district</em> 
        <input type="text" class="form-control"  required minlength="4" required maxlength="15" [pattern]="'^[a-zA-Z]+$'" id="district"
               [(ngModel)]="district" name="district" placeholder="Name of your District  eg: xyz" >
      </div>
      <div class="form-group">
        <label for="state">State </label>
      <em *ngIf="newCustomerForm.controls.state?.invalid && (newCustomerForm.controls.state?.touched)" style="color:red">Required</em>
      <em *ngIf="newCustomerForm.controls.state?.errors?.pattern">Special Characters are not allowed</em>
  <em *ngIf="newCustomerForm.controls.state?.errors?.minlength">Enter state</em> 
        <input type="text" class="form-control"  required minlength="4" required maxlength="15" [pattern]="'^[a-zA-Z]+$'" id="state"
               [(ngModel)]="state" name="state" placeholder="Name of your State eg: mh,tn...">
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
  <button type="submit "  [disabled]=newCustomerForm.invalid class="btn btn-success btn-lg">SAVE</button>
  <button type="button " style="margin-left:3%"  class="btn btn-success btn-lg" (click)="cancel()">CANCEL</button>
  
  </div>
    `,
    styles: [`
    em{float:right; color: #E05c65; padding-left-10px;}
     .container{
           
           width: 50%;
         margin-left : 50%
     }`]
})


export class CreateNewCustomerComponent {
  customer: Customer; 
  
  constructor(private router: Router, private customerService: CustomerService) {
  }
 
  // this.customerService.addCustomer(+this.activatedRoute.snapshot.params['customer']).subscribe(c => this.customer = c);
  // }
 
  addCustomer(newcustomer) {
    this.customerService.addCustomer(newcustomer).subscribe(customer => this.customer = customer)
    alert("Details Saved Successfully!!");
    this.router.navigate(['/customers'])
    console.log(newcustomer)
  }

cancel(){
  this.router.navigate(['/customers'])
}
}