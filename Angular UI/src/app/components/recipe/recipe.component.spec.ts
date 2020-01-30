// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { RecipeComponent } from './recipe.component';
// import { RecipeService } from 'src/app/services/recipe/recipe.service';
// import { Recipe } from 'src/app/models/recipe.model';
// import { MatTableModule } from '@angular/material';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpClientModule } from '@angular/common/http';
// import { Observable} from 'rxjs';
// import { of } from 'rxjs/observable/of';


//   describe('RecipeComponent', () => {
//     // let fixture: ComponentFixture<RecipeComponent>;
//     // let component: RecipeComponent;
//     let service: RecipeService;
//     let fixture;
//     let component;
//    let recipe: any = [
//       { id: 1, recipeTitle: 'Test 1', recipeDescription: 'Test 1' },
//       { id: 2, recipeTitle: 'Test 2', recipeDescription: 'Test 2'},
//       { id: 3, recipeTitle: 'Test 3', recipeDescription: 'Test 3' }
//     ];
    
//     beforeEach(async(() => {
//       TestBed.configureTestingModule({
//         declarations: [RecipeComponent],
//        imports: [RouterTestingModule, HttpClientModule,MatTableModule],
//        schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
//        providers: [RecipeService]
//       }).compileComponents();
//     }));
  

//     beforeEach(() => {
//       fixture = TestBed.createComponent(RecipeComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges();
//     });
  
//     it('should create', () => {
//       expect(component).toBeTruthy();
//     });
  
//     it('should test the recipe table ', (done) => {
//       expect(component.recipes).toEqual(recipe);
  
//       fixture.detectChanges();
//       fixture.whenStable().then(() => {
//         fixture.detectChanges();
  
//         let tableRows = fixture.nativeElement.querySelectorAll('tr');
//         expect(tableRows.length).toBe(4);
  
//         // Header row
//         let headerRow = tableRows[0];
//         expect(headerRow.cells[0].innerHTML).toBe('S.No');
//         expect(headerRow.cells[1].innerHTML).toBe('Title');
//         expect(headerRow.cells[2].innerHTML).toBe('Description');
//         // Data rows
//         let row1 = tableRows[1];
//         expect(row1.cells[0].innerHTML).toBe('1');
//         console.log(row1);
//         expect(row1.cells[1].innerHTML).toBe('Test1');
//         expect(row1.cells[2].innerHTML).toBe('Test1');
  
//         let row2 = tableRows[2];
//         expect(row2.cells[0].innerHTML).toBe('2');
//         expect(row2.cells[1].innerHTML).toBe('Test2');
//         expect(row2.cells[2].innerHTML).toBe('Test2');

//         let row3 = tableRows[2];
//         expect(row2.cells[0].innerHTML).toBe('3');
//         expect(row2.cells[1].innerHTML).toBe('Test3');
//         expect(row2.cells[2].innerHTML).toBe('Test3');
//         done();

        
//       });
// });

// });