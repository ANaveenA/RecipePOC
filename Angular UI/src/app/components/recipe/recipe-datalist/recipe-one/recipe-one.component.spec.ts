// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { RecipeOneComponent } from './recipe-one.component';
// import { By } from '@angular/platform-browser';
// import { Subject } from 'rxjs';
// import { ActivatedRoute, Router } from '@angular/router';
// import { RecipeService } from 'src/app/services/recipe/recipe.service';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpClientModule } from '@angular/common/http';


//   class ActivatedRouteStub {
//     private subject = new Subject();
  
//     push(value) {
//       this.subject.next(value);
//     }
  
//     get params() {
//       return this.subject.asObservable();
//     }
//   }
  
//   describe('RecipeOneComponent', () => {
//     let fixture: ComponentFixture<RecipeOneComponent >;
//     let component: RecipeOneComponent ;
  
//     beforeEach(() => {
//       TestBed.configureTestingModule({
//         imports: [HttpClientModule, RouterTestingModule],
//         declarations: [ RecipeOneComponent  ],
//         schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
//         providers: [
//           RecipeService,
//           { provide: ActivatedRoute, useClass: ActivatedRouteStub }
//         ]
//       });
  
//       fixture = TestBed.createComponent(RecipeOneComponent);
//       component = fixture.componentInstance;
//     });
  
//     it('should show product details for a particular product', () => {
//       component.recipe= {
//         id: "1",
//         recipeTitle: 'Test1',
//         recipeDescription: 'Test1',
//         recipeCreatedAt: "90-90-90",
//       };
  
//       fixture.detectChanges();
  
//       const idElement: HTMLElement = fixture.debugElement.query(
//         By.css('#id')
//       ).nativeElement;
//       const titleElement: HTMLElement = fixture.debugElement.query(
//         By.css('#title')
//       ).nativeElement;
//       const descriptionElement: HTMLElement = fixture.debugElement.query(
//         By.css('#description')
//       ).nativeElement;
//       const recipeCreatedAt: HTMLElement = fixture.debugElement.query(
//         By.css('#date')
//       ).nativeElement;
  
//       expect(idElement.innerText).toContain('1');
//       expect(titleElement.innerText).toContain('Test1');
//       expect(descriptionElement.innerText).toContain('Test1');
//       expect(recipeCreatedAt.innerText).toContain('90-90-90');
//     });

// });
