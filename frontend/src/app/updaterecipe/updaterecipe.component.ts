import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-updaterecipe',
  templateUrl: './updaterecipe.component.html',
  styleUrls: ['./updaterecipe.component.css']
})
export class UpdaterecipeComponent implements OnInit {
   
  constructor(private recipeService: RecipeService, private _router: Router) { }
  recipeItem = new RecipeModel("","","","","","");
  ngOnInit(): void {
    let recipeId = localStorage.getItem("updateRecipeId");
    this.recipeService.getRecipe(recipeId)
    .subscribe((data)=>{
      this.recipeItem = JSON.parse(JSON.stringify(data)); //stringify = convert from object to JSON ; parse = convert from JSON to object
      console.log(this.recipeItem);
    })
  }

  UpdateRecipe(){
    let userid = localStorage.getItem("UserID");
    this.recipeService.updateRecipe(this.recipeItem , userid);
    alert("successful");
    this._router.navigate(['/myrecipes']);
  }

}
