const mongoose = require('mongoose');

module.exports = mongoose.model('emergencyResponseEmployeeReport', {
    date: String,
    timeOfAcknowledgement: String
 
}); 
