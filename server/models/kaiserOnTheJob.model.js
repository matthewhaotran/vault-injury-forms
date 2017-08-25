const mongoose = require('mongoose');

module.exports = mongoose.model('kaiserOnTheJob', {
    date: Date,
    kaiserDoi: String,
    employeeName: String,
    employerContactPerson: String,
    employer: String,
    employersInsuranceCarrier: String,
    physicals: String,
    contactNameTitle: String,
    contactPhone: String,
    contactFax: String,
    timeStart: String,
    timeEnd: String,
    ssn: String
});
