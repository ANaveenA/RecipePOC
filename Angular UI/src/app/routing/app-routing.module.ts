import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from '../components/recipe/recipe.component';
import { RecipeCreateEditComponent } from '../components/recipe/recipe-create-edit/recipe-create-edit.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../components/login/auth.gurd';



const routes: Routes = [
	
	{
		path:'',
		component:RecipeComponent
	},
	{
		path:'recipe',
		component:RecipeComponent
	},
	{
		path:'create',
		component:RecipeCreateEditComponent, canActivate: [AuthGuard] 
	},
	{
		path:'edit/:recipeId',
		component:RecipeCreateEditComponent, canActivate: [AuthGuard] 
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
