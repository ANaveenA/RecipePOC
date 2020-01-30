import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AppRoutingConstants } from 'src/app/routing/app.routing.constants';

@Injectable()
export class RegisterService {

  

  constructor(private http: HttpClient) { }


  register(name: string,
    username: string,
    password: string) {
    var data= {
      name: name,
      username: username,
      password: password,

};
    return this.http.post<any>(AppRoutingConstants.url +  'registration',
     JSON.stringify(data),
     {headers: {'Content-Type':'application/json; charset=UTF-8'}});
}

  
 
}
