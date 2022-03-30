import { Component,Input,Output, EventEmitter} from '@angular/core';
import { Customer } from '../model/customer.model';
import { Router, RouterLink } from '@angular/router';
import { CustomerService } from '../service/customer.service';


@Component({
  selector: 'all-customer',
  template:  `<div class="container">
  <br>
<div class="card" style="width: 20rem;">
<img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq64gLjvjPQ7-pKq338djULaCSCoomdVLx6A&usqp=CAU">

<div class="card-body">

  <div class="well hoverwell thumbnail py-3 my-3" [routerLink]="['/customers',customerdata.customerId]">
  <h2>Customers Id   : {{customerdata.customerId}}  </h2>
  <div style="text-align: center;">
      <div>
          <span> <button [class]=buttonStyle (click)="onButtonClick()">DETAILS</button></span>
      </div>
  </div> 
  
</div>`,

styles: [`
.container{
      margin-left=25px;
}`],
})  
export class AllCustomerComponent {

  @Input() customerdata: Customer[] ;  // property receiving the data from parent using property binding
 // We can create custom event 
  @Output() customEvent =  new EventEmitter(); //   (customEvent) = "someFunction"

  isDisabled = true ;  
  buttonStyle = "btn btn-success btn-lg";
  
  constructor(private router:Router){}
  onButtonClick(){
    
    
    this.customEvent.emit(this.customerdata);  // what ever is send  by default get stored into one javascript '$event'
  }
}

//<div *ngIf="customerdata?.roomno">




// <div> Name : {{customerdata.customerName}} </div>
// <div>Email   : {{customerdata?.customerEmail}} </div>

// <div>roomno   : {{customerdata?.roomno}} </div>
// <div>district   : {{customerdata?.district}} </div>
// <div>state   : {{customerdata?.state}} </div>
//     <div *ngIf="customerdata?.imageUrl">
//        image URL : <img [src]=customerdata.imageUrl width="50px">
//     </div>