import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyrecipesComponent } from './myrecipes/myrecipes.component';
import { AddrecipesComponent } from './addrecipes/addrecipes.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { RecipeService } from './recipe.service';
import { SignupComponent } from './signup/signup.component';
import { UpdaterecipeComponent } from './updaterecipe/updaterecipe.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MyrecipesComponent,
    AddrecipesComponent,
    LoginComponent,
    SignupComponent,
    UpdaterecipeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RecipeService , AuthService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
     }],
  bootstrap: [AppComponent]
})
export class AppModule { }
