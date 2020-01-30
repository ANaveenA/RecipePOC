import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import {Router} from '@angular/router';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  userIsAuthenticated = false;
  username:string;
  private authListenerSubs: Subscription;
  
   constructor(private loginservice:LoginService){
      
  }

  ngOnInit() {
	  
	  this.userIsAuthenticated = this.loginservice.getIsAuth();
    this.username=this.loginservice.getcurrentUser();
    console.log(this.username);
      this.authListenerSubs = this.loginservice
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    
  }
  
  onLogout() {
    this.loginservice.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

 
}
