import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';

import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { RecipeComponent } from '../recipe/recipe.component';

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerStub;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const loginServiceSpy = jasmine.createSpyObj('LoginService', ['login']);
  const testUserData = { id: 1, name: 'admin'};
 
  describe('Component: Login', () => {

    beforeEach(() => {
      routerStub = {
        navigate: jasmine.createSpy("navigate")
      };
        TestBed.configureTestingModule({
            imports: [
              RouterTestingModule.withRoutes([
                { path: 'recipe', component: RecipeComponent },
              ]),
            MatTableModule,
            MatFormFieldModule, MatIconModule, MatInputModule,
            ReactiveFormsModule, FormsModule, HttpClientModule, RouterTestingModule],
            declarations: [LoginComponent,RecipeComponent],
            providers: [LoginService],
  
            schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
    });
    
    it('should call  login method', async(() => {
        let loginElement: DebugElement;
        let debugElement = fixture.debugElement;
        let loginService = debugElement.injector.get(LoginService);
        let loginSpy;
        loginService = debugElement.injector.get(LoginService);
        loginSpy = spyOn(loginService ,'login').and.callThrough();
        loginElement = fixture.debugElement.query(By.css('form'));
        component.loginForm.controls['username'].setValue('admin');
        component.loginForm.controls['password'].setValue('admin');
        loginElement.triggerEventHandler('ngSubmit', null);
        expect(loginSpy).toHaveBeenCalledTimes(1);
        //expect(routerStub.navigate).toHaveBeenCalledWith(['/'])
    }));
  });




