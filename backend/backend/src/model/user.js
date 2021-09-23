const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aliya:userone@cluster0.sq1mu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const User = mongoose.model('User', {
    
    username: String,
    psw: String,
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },

    // password: {
    //     type: String,
    //     required: true
    // },
});


module.exports = User;