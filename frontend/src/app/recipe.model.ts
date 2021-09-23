export class RecipeModel{
    constructor(
        public UserID :String,
        public title : String,
        public imageUrl : String,
        public link : String,
        public ingredients : String,
        public steps : String,
    ){} 
}
// export interface Recipe {
//     id: string;
//     title: string;
//     ingredient : string;
//     content: string;
//     imagePath: string;
//     creator: string;
//   }
