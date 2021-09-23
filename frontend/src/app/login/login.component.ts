import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new UserModel("","");

  constructor(private authService: AuthService,private _router: Router) { }

  ngOnInit(): void {
  } 

  loginUser(){
    this.authService.loginUser(this.user)
    .subscribe(
      res=>{
        if(res.username == "admin"){
          localStorage.setItem('admintoken', res.token);
          this._router.navigate(['/welcome']);
        }
        else{
        localStorage.setItem('token', res.token); //token from backend(res.token) stored in localStorage key name as 'token'
        localStorage.setItem('UserID' , res.userid);
        alert("Login success");
        this._router.navigate(['/welcome']);
        }
      },
      err=>{
        console.log(err);
        this._router.navigate(['/login']);
      }
    )
  }
}
