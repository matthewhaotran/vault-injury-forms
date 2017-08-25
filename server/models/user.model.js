const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {Schema} = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        
    },
    lastName: {
        type: String,
        
    },
    address1: {
        type: String,
        
    },
    address2: {
        type: String,
        
    },
    city: {
        type: String,
      
    },
    zip: {
        type: String,
        
    },
    mobilePhone: {
        type: String,
        
    },
    workPhone: {
        type: String,
      
    },
    ssn: {
        type: String,
       
    },
    employeeId: {
        type: String,
        required: true
    },

    email: {
        type: String,
        lowercase: true,
        unique: true,
      
    },
    password: {
        type: String,
        required: true
    },
});

UserSchema.pre('save', hashPassword);
UserSchema.methods.comparePassword = comparePassword;

module.exports = mongoose.model('User', UserSchema);

///////

function hashPassword(next) {
    if (this.isModified('password') || this.isNew) {
        bcrypt
            .genSalt(10)
            .then(salt => bcrypt.hash(this.password, salt))
            .then(hash => this.password = hash)
            .then(next)
            .catch(next);
    } else {
        return next();
    }
}

function comparePassword(password) {
    return bcrypt.compare(password, this.password);
}
