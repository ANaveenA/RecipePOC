// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { RecipeCreateEditComponent } from './recipe-create-edit.component';
// import { RecipeService } from 'src/app/services/recipe/recipe.service';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpClientModule } from '@angular/common/http';
// import { RecipeComponent } from '../recipe.component';
// import { MatTableModule } from '@angular/material';


// describe('RecipeCreateEditComponent ', () => {
//   let component: RecipeCreateEditComponent ;
//   let fixture: ComponentFixture<RecipeCreateEditComponent >;
//   let recipeService: RecipeService;
//   let routerStub;

//   beforeEach(() => {
//     routerStub = {
//       navigate: jasmine.createSpy("navigate")
//     };
//       TestBed.configureTestingModule({
//           imports: [
//             RouterTestingModule.withRoutes([
//               { path: 'recipe', component: RecipeComponent },
//             ]),
//           MatTableModule,ReactiveFormsModule, FormsModule, HttpClientModule, RouterTestingModule],
//           declarations: [RecipeCreateEditComponent,RecipeComponent],
//           providers: [RecipeService],

//           schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
//       });
//       fixture = TestBed.createComponent(RecipeCreateEditComponent);
//       component = fixture.componentInstance;
//       component.ngOnInit();
//   });
//     beforeEach(() => {
//       fixture = TestBed.createComponent(RecipeCreateEditComponent);
//       component = fixture.componentInstance;
//       recipeService = TestBed.get(RecipeService);
//       fixture.detectChanges();
//     });
  
//     // first test
//     // when onSubmit() from component is called, insert() or update() from service is called
//     it('calling insert or update from service when createRecipe is called',
//        () => {
//       // spyOn(component, 'onSubmit');
//       if (component.mode === "create") {
//           let insertSpy = spyOn(recipeService, 'addRecipe').and.callThrough();
//           let formValidSpy = spyOnProperty(component.form, 'valid', 'get').and.returnValue(true);
//           component.createRecipe();
//           expect(insertSpy).toHaveBeenCalled();
//       }else{
//          let formValidSpy = spyOnProperty(component.form, 'valid', 'get').and.returnValue(true);
//           let spy = spyOn(component.form, 'get').and.returnValue(null); 
//           let updateSpy = spyOn(recipeService, 'updateRecipe');
//           component.createRecipe(); 
//           expect(updateSpy).toHaveBeenCalled();
//       } 
//     });
  
  
// });
