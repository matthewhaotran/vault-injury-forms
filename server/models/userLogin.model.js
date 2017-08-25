const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {Schema} = mongoose;

const UserSchema = new Schema({
    employeeId: {
        type: String,
        required: true
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
