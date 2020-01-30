import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { AppRoutingConstants } from 'src/app/routing/app.routing.constants';
import { map } from "rxjs/operators";
import { LoginService } from '../login/login.service';
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];
  headers: any;
  private recipeUpdated = new Subject<Recipe[]>();

  constructor(private http: HttpClient, private loginservice: LoginService, private router: Router) { }

  getRecipes() {
    return this.http.get<Recipe[]>(AppRoutingConstants.getRecipeList);
  }



  getPostUpdateListener() {
    return this.recipeUpdated.asObservable();
  }

  getRecipe(id: string) {
    return this.http.get<Recipe>(
      AppRoutingConstants.getRecipe + id
    );
  }

  addRecipe(recipeTitle: string,
    recipeDescription: string,
    recipeIncredients: string,
    recipeCookingMethod: string,
    recipeCreatedAt: string,
    vegitarian_non_vegiterian: string,
    number_of_sutiable: string,
    image: File) {
    const recipeData = new FormData();
    var recipe = {
      recipeTitle: recipeTitle,
      recipeDescription: recipeDescription,
      recipeIncredients: recipeIncredients,
      recipeCookingMethod: recipeCookingMethod,
      recipeCreatedAt: recipeCreatedAt,
      vegitarian_non_vegiterian: vegitarian_non_vegiterian,
      number_of_sutiable: number_of_sutiable

    };

    
    var strObj = JSON.stringify(recipe);

    recipeData.append("recipe", strObj);
    recipeData.append("file", image);
   
    let data:any = localStorage.getItem('session');

    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      //'x-auth-token' : localStorage.getItem('xAuthToken'),
      'Authorization': 'Bearer ' + (data ? data.token : '')
    });
    console.log(headers);
    return this.http.post<any>(AppRoutingConstants.saveRecipe,
      recipeData, { headers: this.headers }
    )
      .subscribe(responseData => {
        console.log(responseData);
        this.router.navigate(["/recipe"]);
      }),
      error => {
        console.log(error);
      };
  }



  updateRecipe(id: string, recipeTitle: string,
    recipeDescription: string, recipeIncredients: string,
    recipeCookingMethod: string, recipeCreatedAt: string,
    vegitarian_non_vegiterian: string, number_of_sutiable: string,
    image: File | string) {
    let updateRecipe: Recipe | FormData;
    if (typeof image === "object") {
      updateRecipe = new FormData();
      var recipe = {
        id: id,
        recipeTitle: recipeTitle,
        recipeIncredients: recipeIncredients,
        recipeDescription: recipeDescription,
        recipeCreatedAt: recipeCreatedAt,
        recipeCookingMethod: recipeCookingMethod,
        vegitarian_non_vegiterian: vegitarian_non_vegiterian,
        number_of_sutiable: number_of_sutiable

      };

      var updateObj = JSON.stringify(recipe);

      updateRecipe.append("recipe", updateObj);
      updateRecipe.append("file", image);

    } else {
      updateRecipe = {
        id: id,
        recipeTitle: recipeTitle,
        recipeDescription: recipeDescription,
        recipeIncredients: recipeIncredients,
        recipeCookingMethod: recipeCookingMethod,
        recipeCreatedAt: recipeCreatedAt,
        vegitarian_non_vegiterian: vegitarian_non_vegiterian,
        number_of_sutiable: number_of_sutiable,
        imagepath: image,
      };
    }

    let data:any = localStorage.getItem('session');
    console.log(data.token);
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      //'x-auth-token' : localStorage.getItem('xAuthToken'),
      'Authorization': 'Bearer ' + (data ? data.token : '')
    });
    console.log(headers);
    this.http
      .put(AppRoutingConstants.editRecipe, updateRecipe, { headers: this.headers })
      .subscribe(response => {
        this.router.navigate(["/"]);
      });
  }

  deleteRecipe(recipeId: number) {
    let data:any = localStorage.getItem('session');
    console.log(data.token);
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      //'x-auth-token' : localStorage.getItem('xAuthToken'),
      'Authorization': 'Bearer ' + (data ? data.token : '')
    });
    console.log(headers);
    this.http.delete(AppRoutingConstants.deleteRecipe + recipeId, { headers: this.headers })
      .subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(["/"]);
        }),
      error => {
        console.log(error);
        this.router.navigate(["/"]);
      }

  }

}
