import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantersListComponent } from './planters/planters-list.component';
import { NewPlanterComponent } from './planters/newplanter.component';
import { PlantersByIdComponent } from './planters/plantersbyId.component';
import { Error404Component } from './error/error404.component';
import { PlantersIdRouteGaurdService } from './service/plantersIdroutegaurd.service';
import { UpdatePlanterComponent } from './planters/updateplanter.component';
import { PlantersComponent } from './planters/planters.component';
import { SeedComponent } from './seedcomponents/seed.component';
import { SeedListComponent } from './seedcomponents/seedlist.component';
import { CreateNewSeedComponent } from './seedcomponents/createseed.component';
import { SeedByIdComponent } from './seedcomponents/seedbyId.component';
import { UpdateSeedComponent } from './seedcomponents/updateseed.component';
import { CustomerComponent } from './customercomponents/customer.component';
import { CustomerListComponent } from './customercomponents/customerlist.component';
import { CreateNewCustomerComponent } from './customercomponents/createcustomer.component';
import { DeleteCustomerComponent } from './customercomponents/deletecustomer.component';
import { UpdateCustomerComponent } from './customercomponents/updatecustomer.component';
import { CustomerByIdComponent } from './customercomponents/customerbyid.component';
import { PlantsComponent } from './plantslistcomponent/plants.component';
import { PlantsListComponent } from './plantslistcomponent/plantslist.component';
import { CreateNewplantsComponent } from './plantslistcomponent/createplantscomponent';
import { PlantsByIdComponent } from './plantslistcomponent/plantsbyId.component';
import { UpdatePlantComponent } from './plantslistcomponent/updateplant.component';
import { AllPlantersComponent } from './planters/allplanters.component';
import { AllseedComponent } from './seedcomponents/allseed.component';
import { AllCustomerComponent } from './customercomponents/allcustomercomponents';
import { AllplantsListComponent } from './plantslistcomponent/allplantslist.component';
import { OrderComponent } from './ordercomponents/order.component';
import { OrderListComponent } from './ordercomponents/orderlist.component';
import { CreateNewOrderComponent } from './ordercomponents/createorder.component';
import { DeleteOrderComponent } from './ordercomponents/deleteorder.component';
import { OrderByIdComponent } from './ordercomponents/orderbyid.component';
import { AllOrderComponent } from './ordercomponents/allorderlist.component';
import { CustomerIdRouteGuardCheckService } from './service/customerrouteguardcheck.service';
import { SeedIdRouteGaurdCheckService } from './service/seedroutegaurd.service';
import { PlantIdRouteGuardCheckService } from './service/plantsroutegaurd.service';
import { OrderIdRouteGuardCheckService } from './service/orderrouteguardcheck.service';
import { HomeComponent } from './home/home.component';
import { InvalidIdComponent } from './error/invalidid.component';
import { AdminComponent } from './login/admin.component';
import { AdminListComponent } from './login/adminlist.component';
import { AddAdminComponent } from './login/addadmin.component';
import { LoginComponent } from './login/login.component';
import { AllAdminComponent } from './login/alladmin.component';
import { DeleteAdminComponent } from './login/deleteadmin.component';
import { AppComponent } from './app.component';



const routes: Routes = [  
  {path:"planters",
             component: PlantersComponent,
             children: [
              {path: "", component: PlantersListComponent},
              {path: "new", component: NewPlanterComponent},
              {path: ":pid", component: PlantersByIdComponent},
              {path: "updatePlanters/:pid", component: UpdatePlanterComponent},             
             ]
},       
  {path: "seed",
            component: SeedComponent,
            children: [
              { path: "", component: SeedListComponent },
              { path: "new", component: CreateNewSeedComponent },
              { path: ":sid", component: SeedByIdComponent},
              { path: "updateSeed/:sid", component: UpdateSeedComponent},
            ]
},
{path: "plants",
            component: PlantsComponent,
            children: [
              {path:"",component:PlantsListComponent},
              {path:"new",component: CreateNewplantsComponent},
              {path:":pid",component:PlantsByIdComponent},
              {path:"updatePlants/:pid",component:UpdatePlantComponent},
            ]
},
{path: "orders",
            component: OrderComponent,
            children: [
              {path:"", component:OrderListComponent},
              {path:"addorder", component:CreateNewOrderComponent},
              {path:"deleteorder/:bookingOrderId", component:DeleteOrderComponent},
              {path:":bookingOrderId", component:OrderByIdComponent},
            ]
},
{path: "customers",
            component: CustomerComponent,
            children: [
              {path:"", component:CustomerListComponent},
              {path:"customers/addcustomer", component:CreateNewCustomerComponent},
              {path:"customers/deletecustomer/:cid", component:DeleteCustomerComponent},
              {path:"customers/update/:customerId", component:UpdateCustomerComponent },
              {path:":cid", component:CustomerByIdComponent },
            ]
},
{path: "admin",
            component: AdminComponent,
            children: [
              {path: "", component:AdminListComponent},
              {path: "deleteAdmin?admin=/:admin", component: DeleteAdminComponent},
              {path: "addadmin", component:AddAdminComponent}, 
            ]
},
          {  path: 'app', component: AppComponent},
          { path: "login", component:LoginComponent},
          {path: "home", component: HomeComponent},
           {path: 'plantersnotfound', component: Error404Component},
           {path: "", redirectTo: '/login', pathMatch: 'full'},
          // { path: '', redirectTo: '/seed', pathMatch: 'full' },
           {path: "**", component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponent = [PlantersListComponent,
  NewPlanterComponent,
  PlantersByIdComponent,
  Error404Component,
  UpdatePlanterComponent,
  SeedListComponent,
  CreateNewSeedComponent,
  SeedByIdComponent,
  UpdateSeedComponent,
  CustomerListComponent,
  CreateNewCustomerComponent,
  DeleteCustomerComponent,
  UpdateCustomerComponent,
  CustomerByIdComponent,
  PlantsListComponent,
  CreateNewplantsComponent,
  PlantsByIdComponent,
  UpdatePlantComponent,
  OrderListComponent,
  CreateNewOrderComponent,
  DeleteOrderComponent,
  OrderByIdComponent,
  AllPlantersComponent,
  AllseedComponent,
  AllCustomerComponent,
  AllplantsListComponent,
  AllOrderComponent,
  AllAdminComponent,
  AdminListComponent,
  AddAdminComponent,
  LoginComponent,
  DeleteAdminComponent
]
