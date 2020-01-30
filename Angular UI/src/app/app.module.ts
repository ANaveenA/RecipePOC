import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './app-material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login/login.service';
import { RecipeCreateEditComponent } from './components/recipe/recipe-create-edit/recipe-create-edit.component';
import { ModelViewComponent } from './components/recipe/model-view/model-view.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';
import { RecipeOneComponent } from './components/recipe/recipe-datalist/recipe-one/recipe-one.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { RecipeDataListComponent } from './components/recipe/recipe-datalist/recipe-datalist.component';
import { RecipeService } from './services/recipe/recipe.service';
import { RegisterService } from './services/login/register.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RecipeCreateEditComponent,
    RecipeDetailsComponent,
    RecipeDataListComponent,
    RecipeOneComponent,
    RecipeComponent,
    RegisterComponent,
	ModelViewComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  entryComponents:[
      ModelViewComponent
	],
  providers: [LoginService,RecipeService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
