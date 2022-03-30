import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AdminModel } from '../model/adminmodel';
import { AdminService } from '../service/adminservice';
//import { Planters } from '../model/planters.model';
//import { PlantersService } from '../service/planters.service';

@Component({
  selector: 'admin',
  template: `<div style="margin-left:3%" class="container">
              <style>
                h1 {text-align: center; color: whitesmoke;}
              </style>
                    <h1>LIST OF ADMINS </h1>
                    <br>
                    <div  class= "row row-cols-2">
                    <div  *ngFor="let admin of admins" class="col-md-4 ">  
                            <alladmin [admindata] = admin (customEvent)="parentFunction($event)" ></alladmin>    
                    </div>
              </div>
              
            `,
  styles: [`
                 .container{
                       margin: 10px;
                       padding: 25px;
                 }
            `]
})


export class AdminListComponent implements OnInit {

  private admins: AdminModel[];


  constructor(private adminService: AdminService) {
    console.log("Admin List component clicked");
    // this.plantersService.getAllPlanters().subscribe(plantersarr => this.planters = plantersarr)
  }

  ngOnInit(): void {

    this.adminService.getAllAdmin().subscribe(adminarr => this.admins = adminarr)

  }

  parentFunction(event) {
    console.log(event);
  }
}