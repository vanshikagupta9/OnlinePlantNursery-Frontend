import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantersComponent } from './planters/planters.component';
import { PlantersService } from './service/planters.service';
import { HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { PlantersIdRouteGaurdService } from './service/plantersIdroutegaurd.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeedIdRouteGaurdCheckService } from './service/seedroutegaurd.service';
import { SeedComponent } from './seedcomponents/seed.component';
import { SeedService } from './service/seed.service';
import { CustomerService } from './service/customer.service';
import { CustomerIdRouteGuardCheckService } from './service/customerrouteguardcheck.service';
import { CustomerComponent } from './customercomponents/customer.component';
import { PlantsService } from './service/plants.service';
import { PlantIdRouteGuardCheckService } from './service/plantsroutegaurd.service';
import { PlantsComponent } from './plantslistcomponent/plants.component';
import { OrderService } from './service/order.service';
import { OrderIdRouteGuardCheckService } from './service/orderrouteguardcheck.service';
import { OrderComponent } from './ordercomponents/order.component';
import { HomeComponent } from './home/home.component';
import { InvalidIdComponent } from './error/invalidid.component';
import { AdminService } from './service/adminservice';
import { AdminComponent } from './login/admin.component';





@NgModule({
  declarations: [
    AppComponent,
    PlantersComponent,
    SeedComponent,
    PlantsComponent,
    CustomerComponent,
    OrderComponent,
    NavbarComponent,
    HomeComponent,
    InvalidIdComponent,
    AdminComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PlantersService,
    SeedService,
    CustomerService,
    PlantersIdRouteGaurdService,
    SeedIdRouteGaurdCheckService,
    CustomerIdRouteGuardCheckService,
    PlantsService,
    PlantIdRouteGuardCheckService,
    OrderService,
    OrderIdRouteGuardCheckService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
