import { Component,OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',  
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit{
  userdata: any;

  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.userdata = this.authservice.getAdminId();
  }
}