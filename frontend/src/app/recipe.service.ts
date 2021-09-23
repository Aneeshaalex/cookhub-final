import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) { }

  getmyRecipes(userid : any){
    return this.http.get("http://localhost:3000/myrecipes/"+userid)
  }

  newRecipe(item:any , userid:any){
    return this.http.post("http://localhost:3000/insertrecipe/"+userid, {"recipe" : item})
    .subscribe(data => {console.log(data)})
  }
  
  getRecipe(userid:any){
    return this.http.get("http://localhost:3000/recipe/"+userid);
  }
  deleterecipe(id:any){
    return this.http.delete("http://localhost:3000/deleterecipe/"+id);
  }

  getSingleRecipe(id:any){
    return this.http.get("http://localhost:3000/recipe/"+id);
  }

  updateRecipe(recipe: any , userid:any){
    return this.http.put("http://localhost:3000/updaterecipe/"+userid, recipe)
    .subscribe((data)=>{console.log(data)})
  }

  deleteRecipe(id: any){
    return this.http.delete("http://localhost:3000/removerecipe/"+id);
  }

}
