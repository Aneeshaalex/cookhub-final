const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aliya:userone@cluster0.sq1mu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const Recipe = mongoose.model('Recipe', {
    UserID : String,
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    steps: {
        type: String,
        required: true
    },


    // content: {
    //     type: String,
    //     required: true
    // },
    // imagePath: { 
    //     type: String,
    //      required: true 
    //     },
    
    // recipeDate: {
    //         type: String,
    //         required: true
    //     },

    //     creator: { type: mongoose.Schema.Types.ObjectId,
    //          ref: "User", 
    //          required: true }
});


module.exports = Recipe;




