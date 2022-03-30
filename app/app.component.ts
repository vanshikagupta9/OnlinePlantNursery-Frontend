import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminModel } from './model/adminmodel';
import { AdminService } from './service/adminservice';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Login';
  constructor(private authservice: AuthService, private adminservice: AdminService,private router:Router) { }
  ngOnInit(): void {
    this.LoggedOut=true
    
  }
    user : AdminModel;
    submitted:boolean=false;
    haveData: number;
    data: any;
    resError:any;
    public LoggedIn: boolean=false;
    public LoggedOut: boolean=true;
    signInUser(signindata:AdminModel){
      // this.haveData = 0; 
      //this.submitted=true;
      
      this.adminservice.signInUser(signindata).subscribe((user) => {this.user=user
      console.log(user)
      
      
      if(user!=null){
         if (user==true) {
          console.log(this.user);
          this.LoggedOut=false
          this.LoggedIn=true
          this.authservice.setAdminId(signindata)
          localStorage.setItem('isUser','user');
          alert("Logged In Successfully! Click on OK to Proceed Further");
          this.router.navigate(['/home']);
          console.log("Hi")
         }
         else{
           alert("Admin Name and Password Doesn't Match. Please Try Again!")
           window.location.reload()
         }
        
      }
    },(resError)=> {this.resError=resError})


      // else {
      //   alert("Admin Not Found")
      //   window.location.reload()
      // }
    }
  }
































// import { Component } from '@angular/core';



// @Component({
//   selector: 'app-root',
//   template: `
//   <app-navbar></app-navbar>
//   <router-outlet></router-outlet>
//  `,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Onlinenursery';
 
// }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
  
           
//            <router-outlet></router-outlet>
          
//            `,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Onlinenursery';
// }
// <app-navbar></app-navbar>