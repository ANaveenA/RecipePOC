import {Component, OnInit, ViewChild} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { MatDialog} from '@angular/material/dialog';
import { ModelViewComponent } from './model-view/model-view.component';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  
  selectedRecipe: any;
  recipes:any;
  isLoading = false;
  private recipeSub:Subscription;;
  totalPosts = 0;
  postsPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  data:any;
  displayedColumns: string[] = ['id','recipeTitle', 'recipeDescription','recipeCreatedAt','actionview','actionedit','actiondelete','image'];

  public dataSource = new MatTableDataSource<Recipe>();
  constructor(public recipeService:RecipeService,public dialog: MatDialog) { 
   
    
  }

  ngOnInit() {
   
    this.getRecipes(); 
    
  }

 
  getRecipes(){
    this.isLoading = true;
    this.recipeService.getRecipes().
       subscribe((recipe:any) =>{
      this.recipes=recipe;
      this.totalPosts=this.recipes.length;
      console.log(this.totalPosts);
      
      this.dataSource = this.recipes;
      this.isLoading = false;
    }),
    error =>{
      console.log(error);
      this.isLoading = false;
    }
  }

  
  

  onDelete(postId: number) {
      this.recipeService.deleteRecipe(postId);

  }

  
  viewRecipe(row) {
    const dialogRef = this.dialog.open(ModelViewComponent,{
      data:row,
      width: '80%',
	});
  
  }

   

}

