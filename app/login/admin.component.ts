import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'planters',
  template: `
  <app-navbar></app-navbar>
   <div class="row">
   <div class="d-grid gap-2 col-6 mx-auto">
   <button class="btn btn-success"  [routerLink]="['/admin']">ALL ADMIN</button>
   </div>
   <div class="d-grid gap-2 col-6 mx-auto">
   <button class="btn btn-success"  [routerLink]="['/admin/addadmin']">ADD ADMIN</button>
   </div>
   </div>
   <router-outlet></router-outlet>
  
`,
  
})
export class AdminComponent {


}



