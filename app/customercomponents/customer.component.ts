import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'planters',
  template: `
  <app-navbar></app-navbar>
   <div class="row">
   <div class="d-grid gap-2 col-6 mx-auto">
  
      <button class="btn btn-success"  [routerLink]="['/customers']">ALL CUSTOMERS</button>
   </div>
  
   <div class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-success"  [routerLink]="['customers/addcustomer']">CREATE CUSTOMERS</button>
   </div>
   </div>
   <router-outlet></router-outlet>
  
`,

})
export class CustomerComponent {
 


  

}