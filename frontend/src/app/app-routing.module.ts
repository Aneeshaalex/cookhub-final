import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AddrecipesComponent } from './addrecipes/addrecipes.component';
import { MyrecipesComponent } from './myrecipes/myrecipes.component';
import { SignupComponent } from './signup/signup.component';
import { UpdaterecipeComponent } from './updaterecipe/updaterecipe.component';
import { WelcomeComponent } from './welcome/welcome.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'myrecipes',
    canActivate: [AuthGuard],
    component: MyrecipesComponent,
  },
  {
    path: 'addrecipes',
    canActivate: [AuthGuard],
    component: AddrecipesComponent,
  },
  {
    path: 'updaterecipe',
  component: UpdaterecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
