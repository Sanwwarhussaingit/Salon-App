const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    },
    role: {
        type: String,
        enum: ['user','admin'],
        default: 0
    },
    address: {
        country: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        unique: true
    }

});


// hash password before saving to database
userSchema.pre('save',async function(next){
    const user = this;

    if(!user.isModified('password')) return next();
    //generate salt
    try{
        //generate hash pass
        const salt = await bcrypt.genSalt(10);
        //hash password
        // const hashedPassword = await bcrypt.hashPassword(person.password, salt);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        //set hashed password to password field
        user.password = hashedPassword;
        //continue to save the document
        next();
    }catch(err){    
        return next(err)
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
})
userSchema.methods.comparePassword = async function(candidatePassword){
    try{
        // return await bcrypt.compare(candidatePassword, this.password);
        const isMatch = await bcrypt.compare(candidatePassword, this.password)
        return isMatch;
    }catch(err){
        throw err;
    }
}
//create person model
const UserModel = mongoose.model('User',userSchema);
module.exports = UserModel;

