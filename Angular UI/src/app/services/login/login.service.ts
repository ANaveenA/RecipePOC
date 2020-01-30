import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { AppRoutingConstants } from 'src/app/routing/app.routing.constants';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private username:string;
  private authStatusListener = new Subject<boolean>();
  private tokenResponse:any;
  constructor(private http: HttpClient,private router:Router) { }
  
  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }
  
  getcurrentUser() {
    return this.username;
  }

  getcurrentToken() {
    return this.tokenResponse;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }


  
  login(user){
    const API_URL = AppRoutingConstants.url;
    const headers = {
      authorization: 'Basic ' + btoa(user.username + ':' +user.password)
      
    };
    console.log(headers);
    this.http.get(API_URL + 'login', {headers: headers}).subscribe((response:any) => {
        const token = response.token;
        this.token = token;
        this.tokenResponse=response;
        this.saveAuthData(response);
        if (token) {
          this.isAuthenticated = true;
          this.userId = response.id;
		  this.username=response.username;
          console.log(this.userId);
		  this.saveLoginData(token, this.userId);
          this.authStatusListener.next(true);
          this.router.navigate(["/"]);
        }
      }),
      error =>{
         console.log(error);
      };
  }

  logout(){
    const API_URL = AppRoutingConstants.url;
    return this.http.post(API_URL + 'logout', {}).subscribe(
       ()=> {
         this.token = null;
         this.isAuthenticated = false;
         this.authStatusListener.next(false);
         this.userId = null;
         this.clearAuthData();
		 this.clearLoginData();
         this.router.navigate(["/"]);
       } 
    );
   }

 
  private saveAuthData(userdata:any) {
    localStorage.setItem("session", JSON.stringify(userdata));
  }

  private clearAuthData() {
    localStorage.removeItem("session");
  }

  
  private saveLoginData(token: string, userId: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
  }

  private clearLoginData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
  }
  
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.authStatusListener.next(true);
  }
  
  private getAuthData() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (!token) {
      return;
    }
    return {
      token: token,
      userId: userId
    }
  }
  
  
  register(name: string,
    username: string,
    password: string) {
    var data= {
      name: name,
      username: username,
      password: password,

};
    return this.http.post<any>(AppRoutingConstants.url + 'registration',
     JSON.stringify(data),
     {headers: {'Content-Type':'application/json; charset=UTF-8'}});
}

  
 
}
