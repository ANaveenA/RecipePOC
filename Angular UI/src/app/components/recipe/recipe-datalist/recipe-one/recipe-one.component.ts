import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { RecipeService } from 'src/app/services/recipe/recipe.service';


@Component({
  selector: 'app-recipe-one',
  templateUrl: './recipe-one.component.html',
  styleUrls: ['./recipe-one.component.css']
})
export class RecipeOneComponent implements OnInit {
  @Input() recipe: any;
  @Output() recipeSelected = new EventEmitter<void>();
  
  id: number;
  pageSizeOptions:number[]=[5,10,25,100];
  constructor(public recipeService: RecipeService) {
      
   }

  ngOnInit() {
  
  }

  onSelected() {
    this.recipeSelected.emit();
  }
  onDelete(postId: number) {
    this.recipeService.deleteRecipe(postId);
    
  }
  
}
