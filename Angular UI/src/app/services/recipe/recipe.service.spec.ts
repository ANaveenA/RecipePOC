import { TestBed } from '@angular/core/testing';
import { RecipeService } from './recipe.service';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Recipe } from 'src/app/models/recipe.model';
import { AppRoutingConstants } from 'src/app/routing/app.routing.constants';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../login/login.service';

describe('RecipeService', () => {
  let service: RecipeService;
  let httpMock: HttpTestingController;
    const dummyRecipes: any = [
    { id:1,
      recipeTitle:"classic-Lasange",
      recipeDescription:"This is very taste food",
      recipeIncredients:"2 Buns,chicken-100 gm,vegetables",
      recipeCookingMethod:"1.Empty,1.Empty,1.Empty",
      recipeCreatedAt:null,
      filename:null,
      contentType:null,
      vegitarian_non_vegiterian:"vegitarian",
      number_of_sutiable:"It Sutis for 10 people",
      imagepath:null
     },
  ];
  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientModule,RouterTestingModule,HttpClientTestingModule],
          providers: [RecipeService]
      });
  });

  it('Able to retrieve posts from the API bia GET', () => {
    
    const loginService = TestBed.get(RecipeService);

    const http =TestBed.get(HttpTestingController);

    let recipeResponse;

    loginService.getRecipes(1).subscribe((response) =>{
        recipeResponse =response;
        console.log(recipeResponse);
    })

    http.expectOne(AppRoutingConstants.getRecipeList).flush(dummyRecipes);
 
});
  

});

