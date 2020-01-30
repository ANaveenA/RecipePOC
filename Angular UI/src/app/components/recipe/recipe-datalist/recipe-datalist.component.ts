import { Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-datalist',
  templateUrl: './recipe-datalist.component.html',
  styleUrls: ['./recipe-datalist.component.css']
})
export class RecipeDataListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[]=[];
  isLoading = false;
  private recipeSub:Subscription;

  constructor(public recipeService:RecipeService) { }

  ngOnInit() {
    this.isLoading = true;
    this.recipeService.getRecipes().
      subscribe((recipes:Recipe[]) =>{
      this.recipes=recipes;
      this.isLoading = false;
    })
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
   }


}
