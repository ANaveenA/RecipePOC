import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-create-edit',
  templateUrl: './recipe-create-edit.component.html',
  styleUrls: ['./recipe-create-edit.component.css']
})
export class RecipeCreateEditComponent implements OnInit {
  constructor(public recipeService:RecipeService, public route: ActivatedRoute) { }
  form: FormGroup;
  recipe: Recipe;
  isLoading = false;
  imagePreview: string;
  mode = "create";
  recipeId: string;

  ngOnInit() {
   this.form = new FormGroup({
       id: new FormControl(null),
       recipeTitle: new FormControl(null, {
        validators: [Validators.required, Validators.maxLength(255)]
      }),
      recipeDescription: new FormControl(null, {
         validators: [Validators.required, Validators.maxLength(255)]
       }),
       recipeIncredients: new FormControl(null, {
         validators: [Validators.required, Validators.maxLength(255)]
       }),
       recipeCookingMethod: new FormControl(null, 
         { validators: [Validators.required] }),
         recipeCreatedAt: new FormControl(null),
         vegitarian_non_vegiterian: new FormControl(null, 
         { validators: [Validators.required] }),
         number_of_sutiable: new FormControl(null, 
         { validators: [Validators.required] }),
         image: new FormControl(null,{ validators: [Validators.required]})
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("recipeId")) {
        this.mode = "edit";
        this.recipeId = paramMap.get("recipeId");
        this.isLoading = true;
        this.recipeService.getRecipe(this.recipeId).subscribe(recipeData => {
          this.isLoading = false;
          this.recipe = {
            id: recipeData.id,
            recipeTitle: recipeData.recipeTitle,
            recipeDescription: recipeData.recipeDescription,
            recipeIncredients: recipeData.recipeIncredients,
            recipeCookingMethod: recipeData.recipeCookingMethod,
            recipeCreatedAt: recipeData.recipeCreatedAt,
            vegitarian_non_vegiterian: recipeData.vegitarian_non_vegiterian,
            number_of_sutiable: recipeData.number_of_sutiable,
            imagepath: recipeData.imagepath

          };
          this.form.setValue({
            id: this.recipe.id,
            recipeTitle: this.recipe.recipeTitle,
            recipeDescription: this.recipe.recipeDescription,
            recipeIncredients: this.recipe.recipeIncredients,
            recipeCookingMethod: this.recipe.recipeCookingMethod,
            recipeCreatedAt: this.recipe.recipeCreatedAt,
            vegitarian_non_vegiterian: this.recipe.vegitarian_non_vegiterian,
            number_of_sutiable: this.recipe.number_of_sutiable,
            image: this.recipe.imagepath
          });
        },
        error => {
            console.log(error);
        });
      } else {
        this.mode = "create";
        this.recipeId= null;
      }
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

 
  createRecipe(){
    console.log(this.form.value);
   if (this.form.invalid) {
      return;
    }
      this.isLoading = true;
    if (this.mode === "create") {
    this.recipeService.addRecipe(
         this.form.value.recipeTitle,
         this.form.value.recipeDescription,
         this.form.value.recipeIncredients,
         this.form.value.recipeCookingMethod,
         this.form.value.recipeCreatedAt,
	   	   this.form.value.vegitarian_non_vegiterian,
         this.form.value.number_of_sutiable,
         this.form.value.image);
        } else {
          this.recipeService.updateRecipe(
          this.recipeId,
          this.form.value.recipeTitle,
          this.form.value.recipeDescription,
          this.form.value.recipeIncredients,
          this.form.value.recipeCookingMethod,
          this.form.value.recipeCreatedAt,
		      this.form.value.vegitarian_non_vegiterian,
           this.form.value.number_of_sutiable,
          this.form.value.image
          );
        }
        this.form.reset();
      }
   reset(){

   }

}
