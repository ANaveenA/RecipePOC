import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/login/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform: FormGroup;
  data: any;
  isLoading = false;
  store: any;
  error: any;
  constructor(private registerService: RegisterService, private router: Router) { }

  onSubmit() {

  }

  ngOnInit() {

    this.registerform= new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required,
        Validators.minLength(3)]
      }),
      username: new FormControl(null, {
        validators: [Validators.required,
        Validators.minLength(3)]
      }),
      password: new FormControl(null, {
        validators: [Validators.required,
        Validators.minLength(3)]
      })
    });

  }

  onRegister() {
    if (this.registerform.invalid) {
      return;
    }
    this.isLoading = true;
    this.registerService.register(this.registerform.value.name,this.registerform.value.username,
      this.registerform.value.password).
      subscribe((data: any) => {
        console.log(data);
        this.isLoading = false;
        this.store = "Successully Created,Your redirected to login page";
        setTimeout(() => {
          this.router.navigate(["/login"]);
        }, 4000);
      },
        error => {
          if (!error.response) {
            this.error = error.response;
          } else if (error.response.status === 409) {
            this.error = 'Username is not valid.';
          } else {
            this.error = 'Unexpected error occurred..';
          }

        });
    this.registerform.reset();
  }


}
