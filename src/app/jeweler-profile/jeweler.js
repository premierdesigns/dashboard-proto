"use strict";
var Jeweler = (function () {
    function Jeweler(firstName, middleName, lastName, address1, city, state, zipCode, email, phone, startDate, anniversaryDate, id, address2, profilePicture) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.address1 = address1;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.email = email;
        this.phone = phone;
        this.startDate = startDate;
        this.anniversaryDate = anniversaryDate;
        this.id = id;
        this.address2 = address2;
        this.profilePicture = profilePicture;
    }
    return Jeweler;
}());
exports.Jeweler = Jeweler;
