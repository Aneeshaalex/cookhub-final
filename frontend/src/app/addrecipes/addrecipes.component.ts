import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-addrecipes',
  templateUrl: './addrecipes.component.html',
  styleUrls: ['./addrecipes.component.css']
})
export class AddrecipesComponent implements OnInit {
  recipeItem = new RecipeModel('','','','','','');
  loading = false;
  submitted = false;
  constructor(private recipeService : RecipeService, private _router : Router, ) { }
  
  
  ngOnInit(): void {
  }
  
  AddRecipe(){
    let userid = localStorage.getItem("UserID");
    this.recipeService.newRecipe(this.recipeItem , userid);
    console.log("added");
    alert("addition successful");
    this._router.navigate(['/myrecipes']); 
  }
}
