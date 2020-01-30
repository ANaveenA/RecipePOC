import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loading=false;
  loginForm: FormGroup;
  constructor(private loginService: LoginService,private router:Router) { }


  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, { validators: [Validators.required, 
                                         Validators.minLength(3)] }),
      password: new FormControl(null, { validators: [Validators.required, 
                                         Validators.minLength(3)] })
    });
  }
  
  onSubmit() {
    this.loading = true;
    this.loginService.login(this.loginForm.value);
  }
}
